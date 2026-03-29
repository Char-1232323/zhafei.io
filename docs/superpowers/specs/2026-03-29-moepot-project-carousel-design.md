# MoEPOT Project Card + Horizontal Scroller Design

Date: 2026-03-29
Status: approved in chat

## Goal

Update the Projects section so it currently shows only one project (MoEPOT), includes the project image, and uses a horizontal-scrolling layout that scales naturally as more projects are added later.

## Scope

In scope:
- Replace current `siteContent.projects` list with a single MoEPOT entry.
- Add project image support to project data and card rendering.
- Use MoEPOT image from GitHub with safe direct image URL rendering.
- Convert project cards container to horizontal scrolling with snap behavior.
- Keep image visually small/moderate and avoid dominating card content.
- Update tests for project rendering changes.

Out of scope:
- Adding carousel autoplay.
- Adding previous/next arrow controls.
- Reworking unrelated sections.

## Content Decisions

- Project shown now: `MoEPOT`
- Repository URL: `https://github.com/haiyangxin/MoEPOT`
- Requested image source: `https://github.com/haiyangxin/MoEPOT/blob/main/resources/MoE-POT.png`
- Rendered image URL in UI should be GitHub raw format for direct `<img>` loading.

## Data Model Changes

`ProjectItem` will be extended with optional fields:
- `imageUrl?: string`
- `imageAlt?: string`

Reason: keep backward compatibility for future projects that may not have images yet.

## UI / UX Changes

### Card image
- Add an image block near the top of each project card.
- Constrain image area height to a compact range (target around 160px).
- Use `object-fit: contain` so architecture diagrams are fully visible.
- Keep rounded corners and subtle border/background consistent with current style.

### Horizontal scroller
- Projects list becomes one-line horizontal flow.
- Use `overflow-x: auto` with `scroll-snap-type: x mandatory`.
- Each card gets fixed/min width so cards are readable and consistent.
- Cards use `scroll-snap-align: start` for smooth, predictable snapping.
- Preserve responsive behavior for desktop and mobile touch scrolling.

## Accessibility

- Every image uses meaningful `alt` text via `imageAlt`.
- Horizontal container remains keyboard scrollable as native overflow area.
- Existing heading hierarchy remains unchanged.

## Testing and Verification

- Update `FeaturedProjects` tests to check project text still renders.
- Add assertion that project image renders with expected `alt` and `src`.
- Run:
  - targeted project component tests
  - full test suite
  - production build

## Risks and Mitigations

- GitHub `blob` URLs may not serve raw image data in `<img>` tags.
  - Mitigation: convert to `raw.githubusercontent.com` URL in content.
- Future many-project case may need explicit controls.
  - Mitigation: scroller foundation allows adding arrow buttons later without data-model changes.

## Success Criteria

- Projects section displays only MoEPOT.
- MoEPOT card shows image, and image is visually not oversized.
- Section scrolls horizontally with snap behavior.
- Tests and build pass.
