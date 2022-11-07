import packageJSON from '../../../../../packages/use-exit-intent/package.json'

const { name, version, description, repository, license, author } = packageJSON

export const library = {
  name,
  author,
  version,
  license,
  description,
  url: repository.url.replace('.git', ''),
} as const
