# English/Chinese Toggle Design

Date: 2026-03-29
Status: approved in chat

## Goal

Add a bilingual switch so the homepage supports English and Chinese content, with English as the default language.

## Scope

In scope:
- Keep only two languages: English and Chinese.
- Default to English on first visit.
- Add a visible language toggle component in the header.
- Switch all user-facing page copy between `en` and `zh`.
- Persist selected language in `localStorage`.
- Add tests for default language, switching behavior, and persisted preference.

Out of scope:
- Additional languages.
- Full i18n library integration.
- Route-level locale paths (`/en`, `/zh`).

## Language Model

- Introduce a lightweight local language model with a `LanguageCode` union: `en | zh`.
- Maintain two parallel content objects following current content shape.
- Keep a single source for non-translated identifiers and links:
  - profile name (`Fei Zha`)
  - project identifier (`MoEPOT`)
  - publication titles (keep original official titles)
  - external URLs and anchors

## UX Behavior

- Header includes a compact switch control: `EN | 中文`.
- Default state on first load: `EN`.
- Clicking language option updates all visible text immediately.
- Selected language is saved to `localStorage` and restored on next visit.

## Architecture

- Move language-dependent content access to AppShell-level state.
- AppShell decides current language and passes language-specific content to all sections.
- Navigation labels become language-aware using same selected language.
- Header receives:
  - current language
  - toggle callback
  - localized nav labels

## Data Strategy

- Split content definitions into:
  - `siteContentEn`
  - `siteContentZh`
- Add a small selector utility to choose localized content by current language.
- Chinese content is manually authored, not machine-translated at runtime.

## Translation Scope

Translate these sections:
- header nav labels
- hero intro/tagline/actions/stats labels
- about section intro/cards/tags
- experience section labels and descriptions
- publications section supporting labels (venue/year headings if any static text)
- projects section copy (purpose/contribution/result/mood labels)
- contact section headings/messages/status text

Keep unchanged:
- paper titles and repository names
- link URLs

## Accessibility and Interaction

- Language toggle must be keyboard accessible and screen-reader understandable.
- Use button semantics for toggle options.
- Provide clear selected state indication (visual + `aria-pressed` or equivalent).

## Testing

- Add/adjust tests for:
  - default English rendering on first load
  - switching to Chinese updates representative text in header/body
  - persisted preference restores selected language on remount
  - language toggle control accessibility semantics

## Risks and Mitigations

- Risk: content drift between `en` and `zh` objects.
  - Mitigation: keep same data shape and include type checks.
- Risk: tests become brittle due to full-text assertions.
  - Mitigation: assert key representative strings rather than every sentence.

## Success Criteria

- First visit loads in English.
- User can switch to Chinese from header control.
- Page content updates consistently across all major sections.
- Refresh keeps last selected language.
- Tests and build pass.
