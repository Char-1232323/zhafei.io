export type LanguageCode = 'en' | 'zh'

export const DEFAULT_LANGUAGE: LanguageCode = 'en'
export const LANGUAGE_STORAGE_KEY = 'preferred-language'

export function parseLanguageCode(value: string | null): LanguageCode | null {
  if (value === 'en' || value === 'zh') {
    return value
  }

  return null
}
