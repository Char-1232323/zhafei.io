# Email Smart Fallback Design

Date: 2026-03-29
Status: approved in chat

## Goal

Keep a single `Email` button. When clicked, attempt to open the mail client via `mailto:`; if no app takes over, automatically copy the email address and show a lightweight fallback message.

## Scope

In scope:
- Do not add a separate "Copy Email" button.
- Add smart fallback behavior only for the Email link in the Contact section.
- Keep GitHub/Pages links unchanged.
- Show a compact status message for fallback copy success/failure.
- Add tests for fallback logic and unchanged external-link behavior.

Out of scope:
- Global toast system.
- Browser/OS-level detection APIs beyond practical runtime heuristics.
- Refactoring unrelated contact layout structure.

## UX Behavior

### Primary path
- User clicks `Email`.
- App tries `mailto:zf210033@mail.ustc.edu.cn`.
- If mail app handles it, normal behavior occurs.

### Fallback path
- If page remains visible after a short delay (heuristic indicating no app handoff), app copies `zf210033@mail.ustc.edu.cn`.
- Show message: `No mail app detected, email copied`.

### Failure fallback
- If clipboard copy fails, show message: `Unable to copy email, please copy manually`.

## Technical Design

- Add click handler for email-only contact item in `ContactInvitation`.
- Keep link semantics (`href="mailto:..."`) to preserve normal browser behavior.
- Use runtime fallback flow:
  1. allow default mailto navigation attempt
  2. set short timeout (about 600ms)
  3. if document is still visible/focused, trigger copy routine
- Copy routine:
  - First try `navigator.clipboard.writeText`
  - Fallback to hidden textarea + `document.execCommand('copy')`
- Store transient status message in component state and clear it automatically.

## Accessibility

- Fallback message rendered in `aria-live="polite"` region.
- Existing link keyboard navigation remains intact.

## Testing

- Update ContactInvitation tests to verify:
  - email link remains `mailto:`
  - fallback copy routine executes in no-handoff simulation
  - fallback status text appears
  - GitHub/Pages external-link attributes remain unchanged

## Risks and Mitigations

- Handoff detection is heuristic (not guaranteed across all environments).
  - Mitigation: keep timeout modest and use conservative fallback messaging.
- Clipboard API permission restrictions.
  - Mitigation: provide legacy textarea fallback and failure message.

## Success Criteria

- User keeps single Email button.
- Environments with mail app continue normal `mailto:` behavior.
- Environments without mail app automatically get copied email + clear feedback.
- Tests and build pass.
