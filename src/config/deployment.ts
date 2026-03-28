export function getBasePath(repository?: string): string {
  if (!repository) {
    return '/'
  }

  const [, repo] = repository.split('/')

  if (!repo || repo.endsWith('.github.io')) {
    return '/'
  }

  return `/${repo}/`
}
