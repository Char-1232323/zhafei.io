# MoEPOT Project Carousel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Projects section content with a single MoEPOT project entry, render its diagram image in a compact card, and switch the project list to a horizontal snap scroller that supports future growth.

**Architecture:** Keep the existing `FeaturedProjects` component and extend it incrementally. First, update types and content data to represent one GitHub project with optional image metadata. Next, add rendering for project links and image in the card. Finally, update card container CSS to horizontal scroll with snap and add tests to lock behavior.

**Tech Stack:** React, TypeScript, CSS Modules, Vitest, Testing Library

---

## File Structure Map

- Modify: `src/types/content.ts`
  - Extend `ProjectItem` with optional image metadata used by the UI.
- Modify: `src/data/siteContent.ts`
  - Replace current `projects` array with one MoEPOT item and direct raw image URL.
- Modify: `src/components/FeaturedProjects/FeaturedProjects.tsx`
  - Render project name as GitHub link when `codeUrl` exists and render project image block when `imageUrl` exists.
- Modify: `src/components/FeaturedProjects/FeaturedProjects.module.css`
  - Convert cards container to horizontal scroll with snap and compact image styling.
- Modify: `src/components/FeaturedProjects/FeaturedProjects.test.tsx`
  - Add regression tests for project link and image rendering.

### Task 1: Extend project data contract for image metadata

**Files:**
- Modify: `src/types/content.ts`
- Test: `src/components/FeaturedProjects/FeaturedProjects.test.tsx`

- [ ] **Step 1: Write failing type-usage test by asserting image alt text in component test**

```tsx
it('renders project image when image metadata is provided', () => {
  render(<FeaturedProjects projects={siteContent.projects} />)

  expect(screen.getByRole('img', { name: /moe-pot architecture overview/i })).toBeInTheDocument()
})
```

- [ ] **Step 2: Run targeted test to verify failure**

Run: `npm run test -- src/components/FeaturedProjects/FeaturedProjects.test.tsx`
Expected: FAIL because image is not rendered yet.

- [ ] **Step 3: Extend `ProjectItem` type with optional image fields**

```ts
export interface ProjectItem {
  name: string
  purpose: string
  contribution: string
  techStack: string[]
  result: string
  mood?: string
  codeUrl?: string
  demoUrl?: string
  imageUrl?: string
  imageAlt?: string
}
```

- [ ] **Step 4: Re-run targeted test (should still fail at runtime render stage)**

Run: `npm run test -- src/components/FeaturedProjects/FeaturedProjects.test.tsx`
Expected: FAIL on missing `<img>` render, confirming type changes alone are insufficient.

- [ ] **Step 5: Commit Task 1 changes**

```bash
git add src/types/content.ts src/components/FeaturedProjects/FeaturedProjects.test.tsx
git commit -m "chore: extend project item metadata for images"
```

### Task 2: Replace projects data with single MoEPOT entry

**Files:**
- Modify: `src/data/siteContent.ts`
- Test: `src/components/FeaturedProjects/FeaturedProjects.test.tsx`

- [ ] **Step 1: Add failing test for GitHub project link target**

```tsx
it('renders the project name as a GitHub link when codeUrl exists', () => {
  render(<FeaturedProjects projects={siteContent.projects} />)

  const projectLink = screen.getByRole('link', { name: 'MoEPOT' })
  expect(projectLink).toHaveAttribute('href', 'https://github.com/haiyangxin/MoEPOT')
})
```

- [ ] **Step 2: Run targeted test to verify failure**

Run: `npm run test -- src/components/FeaturedProjects/FeaturedProjects.test.tsx`
Expected: FAIL because project title is currently plain text, not a link.

- [ ] **Step 3: Update `siteContent.projects` to one MoEPOT record**

```ts
projects: [
  {
    name: 'MoEPOT',
    purpose:
      'A Mixture-of-Experts Operator Transformer project for large-scale PDE pre-training research and reproducible experimentation.',
    contribution:
      'Focused on understanding the model design, training setup, and practical workflow for reading and reproducing the paper implementation.',
    techStack: ['Python', 'PyTorch', 'CUDA', 'PDE Modeling'],
    result:
      'A clear project anchor on my homepage that links directly to the official repository and visualizes the core architecture at a glance.',
    mood: 'research engineering',
    codeUrl: 'https://github.com/haiyangxin/MoEPOT',
    imageUrl: 'https://raw.githubusercontent.com/haiyangxin/MoEPOT/main/resources/MoE-POT.png',
    imageAlt: 'MoE-POT architecture overview'
  }
],
```

- [ ] **Step 4: Re-run targeted test to confirm data exists but render remains incomplete**

Run: `npm run test -- src/components/FeaturedProjects/FeaturedProjects.test.tsx`
Expected: Still FAIL until component renders link/image.

- [ ] **Step 5: Commit Task 2 changes**

```bash
git add src/data/siteContent.ts src/components/FeaturedProjects/FeaturedProjects.test.tsx
git commit -m "feat: replace projects content with moepot entry"
```

### Task 3: Render project link and compact image in card

**Files:**
- Modify: `src/components/FeaturedProjects/FeaturedProjects.tsx`
- Test: `src/components/FeaturedProjects/FeaturedProjects.test.tsx`

- [ ] **Step 1: Add/adjust failing test assertions for image `src` and safe link behavior**

```tsx
it('renders project image and source URL', () => {
  render(<FeaturedProjects projects={siteContent.projects} />)

  const image = screen.getByRole('img', { name: /moe-pot architecture overview/i })
  expect(image).toHaveAttribute(
    'src',
    'https://raw.githubusercontent.com/haiyangxin/MoEPOT/main/resources/MoE-POT.png'
  )
})
```

- [ ] **Step 2: Run targeted test to verify failure**

Run: `npm run test -- src/components/FeaturedProjects/FeaturedProjects.test.tsx`
Expected: FAIL due to missing image/link markup.

- [ ] **Step 3: Implement link title and optional image rendering in component**

```tsx
<div className={styles.cardHeader}>
  {project.codeUrl ? (
    <a className={styles.projectLink} href={project.codeUrl} target="_blank" rel="noopener noreferrer">
      <h3 className={styles.projectName}>{project.name}</h3>
    </a>
  ) : (
    <h3 className={styles.projectName}>{project.name}</h3>
  )}
  {project.mood && <span className={styles.moodLabel}>{project.mood}</span>}
</div>

{project.imageUrl && project.imageAlt && (
  <div className={styles.imageWrap}>
    <img src={project.imageUrl} alt={project.imageAlt} className={styles.projectImage} loading="lazy" />
  </div>
)}
```

- [ ] **Step 4: Re-run targeted tests to verify pass**

Run: `npm run test -- src/components/FeaturedProjects/FeaturedProjects.test.tsx`
Expected: PASS for link/image assertions.

- [ ] **Step 5: Commit Task 3 changes**

```bash
git add src/components/FeaturedProjects/FeaturedProjects.tsx src/components/FeaturedProjects/FeaturedProjects.test.tsx
git commit -m "feat: render linked moepot title and project preview image"
```

### Task 4: Switch cards layout to horizontal snap scroller with compact image size

**Files:**
- Modify: `src/components/FeaturedProjects/FeaturedProjects.module.css`
- Test: `src/components/FeaturedProjects/FeaturedProjects.test.tsx`

- [ ] **Step 1: Add failing class-based expectations (if desired) or skip to visual verification**

```tsx
// Optional unit assertion example; if omitted, verify via build + manual preview.
expect(screen.getByRole('region', { name: /featured projects/i })).toBeInTheDocument()
```

- [ ] **Step 2: Implement horizontal scrolling and snap behavior styles**

```css
.cards {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(320px, 420px);
  gap: 20px;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  padding-bottom: 10px;
}

.card {
  scroll-snap-align: start;
}

.imageWrap {
  height: 160px;
  border-radius: 16px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid var(--line);
}

.projectImage {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
```

- [ ] **Step 3: Add title-link style that preserves visual identity**

```css
.projectLink {
  color: inherit;
  text-decoration: none;
}

.projectLink:hover .projectName {
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
}
```

- [ ] **Step 4: Run full verification suite**

Run: `npm run test -- src/components/FeaturedProjects/FeaturedProjects.test.tsx && npm test && npm run build`
Expected:
- FeaturedProjects tests pass
- Full test suite passes
- Production build succeeds

- [ ] **Step 5: Commit Task 4 changes**

```bash
git add src/components/FeaturedProjects/FeaturedProjects.module.css src/components/FeaturedProjects/FeaturedProjects.test.tsx
git commit -m "feat: add horizontal snap scroller for project cards"
```

### Task 5: Final polish and push

**Files:**
- Modify: (none expected; only if verification reveals issues)

- [ ] **Step 1: Inspect final diff for scope correctness**

Run: `git diff --stat HEAD~4..HEAD`
Expected: only project types/data/component/styles/tests files changed.

- [ ] **Step 2: Push branch for Pages deployment**

Run: `git push origin HEAD:master`
Expected: push accepted and workflow picks up deploy.

- [ ] **Step 3: Manual smoke check in browser**

Check:
- Projects section contains only MoEPOT.
- Card title links to GitHub in new tab.
- MoE-POT image appears and stays compact.
- Horizontal scrolling works (mouse/touch) and snaps.

## Self-Review Checklist

- Spec coverage:
  - Single MoEPOT project: covered in Task 2.
  - GitHub link replacement: covered in Task 3.
  - Image integration and compact size: covered in Tasks 3 and 4.
  - Horizontal scrolling behavior: covered in Task 4.
  - Verification and deploy: covered in Tasks 4 and 5.
- Placeholder scan: no TBD/TODO placeholders in actionable steps.
- Type consistency:
  - Uses `imageUrl` and `imageAlt` consistently in type, data, component, and tests.
  - Uses `codeUrl` consistently for external project link.
