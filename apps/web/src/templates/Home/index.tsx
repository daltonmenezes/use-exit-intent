import { Head, Header, Layout, LayoutSpacing } from 'components'
import { PlaygroundSection } from './Playground'
import { OverviewSection } from './Overview'
import { meta } from 'shared/constants'

export function HomeTemplate() {
  return (
    <Layout>
      <Head meta={meta} />
      <Header />

      <OverviewSection />
      <LayoutSpacing size="small" />
      <PlaygroundSection />
      <LayoutSpacing size="small" />
    </Layout>
  )
}
