import Link from 'next/link'

import { intersection, library } from 'shared/constants'
import { useElementIntersection } from 'hooks'

import {
  Title,
  GitHubIcon,
  FixedHeader,
  Description,
  ExternalLink,
  LayoutSpacing,
  LibraryVersion,
  InstallationBox,
} from 'components'

import { Layout } from './styles'

export function Header() {
  const { ref, onIntersect } = useElementIntersection({
    ...intersection.options,
    offset: 0,
  })

  onIntersect('home', () => {
    history.replaceState(null, ``, `#`)
  })

  return (
    <Layout ref={ref}>
      <LayoutSpacing>
        <FixedHeader>
          <LibraryVersion />

          <Link href="/docs/getting-started/overview" passHref>
            <a>Docs</a>
          </Link>

          <Link href="/docs/getting-started/installation" passHref>
            <a>Install</a>
          </Link>

          <a href="#playground">Playground</a>

          <ExternalLink href={library.url}>
            <GitHubIcon></GitHubIcon>
          </ExternalLink>
        </FixedHeader>
      </LayoutSpacing>

      <LayoutSpacing size="small" />

      <Title>useExitIntent</Title>

      <Description>🐠 {library.description}</Description>

      <LayoutSpacing size="small" />

      <InstallationBox />

      <LayoutSpacing size="medium" />
    </Layout>
  )
}
