# English/Chinese Toggle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an English/Chinese language switcher with English default, full-page content switching, and persisted preference.

**Architecture:** Keep the app lightweight by using local typed content objects (`en` and `zh`) plus AppShell-managed language state. Header hosts the toggle UI and receives current language + callback. Existing section components remain mostly unchanged and consume already-selected localized content.

**Tech Stack:** React, TypeScript, CSS Modules, Vitest, Testing Library

---

## File Structure Map

- Create: `src/i18n/language.ts`
  - Language type, default language, storage key, safe parser.
- Create: `src/data/siteContent.i18n.ts`
  - `siteContentEn`, `siteContentZh`, content selector helper.
- Create: `src/config/navigation.i18n.ts`
  - `navigationEn`, `navigationZh`, selector helper.
- Modify: `src/app/AppShell.tsx`
  - Language state, localStorage restore/persist, pass localized content/nav.
- Modify: `src/components/Header/Header.tsx`
  - Add language switch control props and UI.
- Modify: `src/components/Header/Header.module.css`
  - Add styles for switcher.
- Modify tests:
  - `src/app/AppShell.test.tsx`
  - `src/components/Header/Header.test.tsx`
  - any content/model tests referencing old singleton content source.

### Task 1: Add language model and localized data sources

**Files:**
- Create: `src/i18n/language.ts`
- Create: `src/data/siteContent.i18n.ts`
- Create: `src/config/navigation.i18n.ts`

- [ ] **Step 1: Add failing test expectations for localized content selector usage**

```tsx
expect(screen.getByText('About Me')).toBeInTheDocument()
```

- [ ] **Step 2: Run tests to confirm current setup fails for language switching**

Run: `npm run test -- src/app/AppShell.test.tsx src/components/Header/Header.test.tsx`
Expected: FAIL because language toggle and selectors do not exist.

- [ ] **Step 3: Implement language primitives**

```ts
export type LanguageCode = 'en' | 'zh'
export const DEFAULT_LANGUAGE: LanguageCode = 'en'
export const LANGUAGE_STORAGE_KEY = 'preferred-language'
```

- [ ] **Step 4: Add dual content sources and selector helpers**

```ts
export function getSiteContent(language: LanguageCode): SiteContent {
  return language === 'zh' ? siteContentZh : siteContentEn
}
```

- [ ] **Step 5: Commit Task 1**

```bash
git add src/i18n/language.ts src/data/siteContent.i18n.ts src/config/navigation.i18n.ts
git commit -m "feat: add typed bilingual content sources"
```

### Task 2: Add language state and toggle UI wiring

**Files:**
- Modify: `src/app/AppShell.tsx`
- Modify: `src/components/Header/Header.tsx`
- Modify: `src/components/Header/Header.module.css`

- [ ] **Step 1: Add failing tests for default EN + switch to ZH + persistence**

```tsx
expect(screen.getByRole('button', { name: '中文' })).toBeInTheDocument()
```

- [ ] **Step 2: Implement AppShell language state and persistence**

```tsx
const [language, setLanguage] = useState<LanguageCode>(DEFAULT_LANGUAGE)
useEffect(() => {
  const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY)
  if (saved === 'en' || saved === 'zh') setLanguage(saved)
}, [])
useEffect(() => {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
}, [language])
```

- [ ] **Step 3: Implement Header language toggle control**

```tsx
<button aria-pressed={language === 'en'}>EN</button>
<button aria-pressed={language === 'zh'}>中文</button>
```

- [ ] **Step 4: Style toggle to match existing header design**

```css
.langToggle { display: inline-flex; gap: 6px; }
```

- [ ] **Step 5: Run targeted tests and confirm pass**

Run: `npm run test -- src/app/AppShell.test.tsx src/components/Header/Header.test.tsx`
Expected: PASS.

- [ ] **Step 6: Commit Task 2**

```bash
git add src/app/AppShell.tsx src/components/Header/Header.tsx src/components/Header/Header.module.css src/app/AppShell.test.tsx src/components/Header/Header.test.tsx
git commit -m "feat: add english-chinese toggle in header"
```

### Task 3: Complete content translation wiring and regressions

**Files:**
- Modify: translation data files and tests that import old content singleton

- [ ] **Step 1: Ensure all visible section strings are localized via selected content**

Run a focused check in tests for representative EN/ZH text in header, hero, and contact.

- [ ] **Step 2: Update any failing tests tied to old `siteContent` import path**

Use selectors to reference English content baseline where needed.

- [ ] **Step 3: Run full verification**

Run: `npm test && npm run build`
Expected: all tests pass and build succeeds.

- [ ] **Step 4: Commit Task 3**

```bash
git add src
git commit -m "feat: localize page content for english and chinese"
```

### Task 4: Final readiness

**Files:**
- Modify: none expected

- [ ] **Step 1: Verify diff scope**

Run: `git diff --stat origin/master...HEAD`

- [ ] **Step 2: Push when approved**

Run: `git push origin HEAD:master`

## Self-Review Checklist

- Spec coverage: EN default, Header toggle, full content switching, localStorage persistence, and tests are mapped to Tasks 1-3.
- Placeholder scan: no TODO/TBD instructions.
- Type consistency: `LanguageCode` and selector functions are used consistently across AppShell, Header, and data sources.
