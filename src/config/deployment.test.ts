import { describe, expect, it } from 'vitest'
import { getBasePath } from './deployment'

describe('getBasePath', () => {
  it('uses the repository name for project pages builds', () => {
    expect(getBasePath('Char-1232323/zhafei.io')).toBe('/zhafei.io/')
  })

  it('uses the root path for local builds', () => {
    expect(getBasePath()).toBe('/')
  })
})
