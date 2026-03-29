# Email Smart Fallback Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Keep a single Email button that opens `mailto:` normally, but automatically copies the address and shows feedback when no mail app handles the click.

**Architecture:** Extend `ContactInvitation` with email-specific click handling and a small local status state. The handler preserves native `mailto:` behavior, then runs a delayed fallback copy when the page still appears active. Tests are expanded to cover fallback copy behavior and unchanged external-link behavior.

**Tech Stack:** React, TypeScript, CSS Modules, Vitest, Testing Library

---

## File Structure Map

- Modify: `src/components/ContactInvitation/ContactInvitation.tsx`
  - Add email click handler, clipboard fallback utility, and live status message.
- Modify: `src/components/ContactInvitation/ContactInvitation.module.css`
  - Add styles for fallback status text.
- Modify: `src/components/ContactInvitation/ContactInvitation.test.tsx`
  - Add failing/passing tests for fallback copy behavior and keep existing link expectations.

### Task 1: Add fallback test coverage first

**Files:**
- Modify: `src/components/ContactInvitation/ContactInvitation.test.tsx`

- [ ] **Step 1: Add failing test for email fallback copy path**

```tsx
it('copies email and shows fallback message when no mail app handoff is detected', async () => {
  vi.useFakeTimers()
  const writeText = vi.fn().mockResolvedValue(undefined)
  Object.assign(navigator, { clipboard: { writeText } })

  render(<ContactInvitation contactLinks={siteContent.contact} />)
  await userEvent.click(screen.getByText('Email'))

  vi.advanceTimersByTime(700)

  await waitFor(() => {
    expect(writeText).toHaveBeenCalledWith('zf210033@mail.ustc.edu.cn')
  })
  expect(screen.getByText('No mail app detected, email copied')).toBeInTheDocument()
})
```

- [ ] **Step 2: Run targeted test and confirm failure**

Run: `npm run test -- src/components/ContactInvitation/ContactInvitation.test.tsx`
Expected: FAIL because fallback logic/message is not implemented yet.

- [ ] **Step 3: Keep existing tests for external links and mailto assertion**

```tsx
expect(emailLink).toHaveAttribute('href', expect.stringMatching(/^mailto:/))
expect(githubLink).toHaveAttribute('target', '_blank')
```

- [ ] **Step 4: Commit test-only preparation**

```bash
git add src/components/ContactInvitation/ContactInvitation.test.tsx
git commit -m "test: add email fallback copy behavior coverage"
```

### Task 2: Implement email smart fallback behavior

**Files:**
- Modify: `src/components/ContactInvitation/ContactInvitation.tsx`
- Modify: `src/components/ContactInvitation/ContactInvitation.module.css`

- [ ] **Step 1: Add copy helper and email extraction in component**

```tsx
const emailAddress = 'zf210033@mail.ustc.edu.cn'

async function copyEmailToClipboard(email: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(email)
      return true
    }
  } catch {
    // fallback below
  }

  const textarea = document.createElement('textarea')
  textarea.value = email
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'absolute'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)
  textarea.select()
  const copied = document.execCommand('copy')
  document.body.removeChild(textarea)
  return copied
}
```

- [ ] **Step 2: Add click handler for only `mailto:` links**

```tsx
const [fallbackMessage, setFallbackMessage] = useState('')

const handleEmailClick = (href: string) => {
  if (!href.startsWith('mailto:')) {
    return
  }

  const email = href.replace('mailto:', '')
  window.setTimeout(async () => {
    if (document.visibilityState !== 'visible') {
      return
    }

    const copied = await copyEmailToClipboard(email)
    setFallbackMessage(
      copied
        ? 'No mail app detected, email copied'
        : 'Unable to copy email, please copy manually'
    )

    window.setTimeout(() => setFallbackMessage(''), 1800)
  }, 600)
}
```

- [ ] **Step 3: Wire handler without breaking normal link behavior**

```tsx
<a
  key={link.label}
  href={link.href}
  className={styles.link}
  onClick={() => handleEmailClick(link.href)}
  target={link.href.startsWith('http') ? '_blank' : undefined}
  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
>
  {link.label}
</a>
```

- [ ] **Step 4: Render accessible status message and style it**

```tsx
{fallbackMessage ? (
  <p className={styles.fallbackHint} role="status" aria-live="polite">
    {fallbackMessage}
  </p>
) : null}
```

```css
.fallbackHint {
  margin: 6px 0 0;
  color: var(--muted);
  font-size: 0.88rem;
}
```

- [ ] **Step 5: Run targeted test and confirm pass**

Run: `npm run test -- src/components/ContactInvitation/ContactInvitation.test.tsx`
Expected: PASS including new fallback test.

- [ ] **Step 6: Commit implementation**

```bash
git add src/components/ContactInvitation/ContactInvitation.tsx src/components/ContactInvitation/ContactInvitation.module.css src/components/ContactInvitation/ContactInvitation.test.tsx
git commit -m "feat: add email auto-copy fallback when mail app unavailable"
```

### Task 3: Final verification and deploy readiness

**Files:**
- Modify: none expected unless verification reveals regressions

- [ ] **Step 1: Run full verification suite**

Run: `npm test && npm run build`
Expected:
- All tests pass
- Type checks pass
- Production build succeeds

- [ ] **Step 2: Check diff scope before push**

Run: `git diff --stat origin/master...HEAD`
Expected: only ContactInvitation files changed for this feature.

- [ ] **Step 3: Push to deploy branch when approved**

Run: `git push origin HEAD:master`
Expected: push accepted, GitHub Pages deploy triggered.

## Self-Review Checklist

- Spec coverage:
  - Single email button retained: Task 2.
  - No separate copy button: Task 2.
  - Mailto preserved: Task 2 and tests.
  - Auto-copy fallback on no handoff: Task 2 and tests.
  - Live feedback message: Task 2.
  - Tests/build pass: Task 3.
- Placeholder scan: no TBD/TODO placeholders.
- Type consistency: handler and message state names are consistent across component and tests.
