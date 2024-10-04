import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import * as RadixDialog from '@radix-ui/react-dialog'
import { useExitIntent } from 'use-exit-intent'

import { useDisclosure, useElementIntersection, useMatchMedia } from 'hooks'
import { BaseLayout, Button, ExitIntentModal } from 'components'
import { intersection, sizes } from 'shared/constants'

import {
  Label,
  Title,
  Legend,
  Header,
  Footer,
  Section,
  Fieldset,
  Separator,
  Description,
  ResetControls,
  SectionContent,
  StateContainer,
} from './styles'

import { codeTheme } from 'styles'

export function PlaygroundSection() {
  const { isOpen, open, toggle } = useDisclosure(false)
  const { ref, onIntersect } = useElementIntersection(intersection.options)

  const matchesMobileWidth = useMatchMedia(
    `(max-width: ${sizes.breakpoints.mobile}px)`
  )

  const {
    settings,
    resetState,
    unsubscribe,
    isTriggered,
    resetSettings,
    isUnsubscribed,
    updateSettings,
    registerHandler,
    willBeTriggered,
  } = useExitIntent({
    cookie: {
      key: 'use-exit-intent',
    },

    desktop: {
      delayInSecondsToTrigger: 1,
      triggerOnIdle: false,
    },

    mobile: {
      delayInSecondsToTrigger: 1,
      triggerOnIdle: true,
    },
  })

  registerHandler({
    id: 'openModal',
    handler: () => {
      console.log('event: trigger')
      open()
    },
  })

  registerHandler({
    id: 'anotherHandler',
    handler: () => console.log('Another handler'),
    context: ['onDesktop'],
  })

  registerHandler({
    id: 'onUnsubscription',
    handler: () => console.log('Unsubscription handler'),
    context: ['onUnsubscribe', 'onMobile'],
  })

  onIntersect('playground', ({ ref }) => {
    history.replaceState(null, ``, `#${ref.current.id}`)
  })

  function handleJustCloseModal(state = false) {
    toggle(state)
  }

  function handleCloseModalUnsubscription() {
    toggle(false)
    unsubscribe()
  }

  return (
    <BaseLayout id="playground" ref={ref}>
      <Header>
        <Title>Playground</Title>

        <Description>
          These are the settings available in the <strong>useExitIntent</strong>{' '}
          hook, you can play around with them in the{' '}
          {matchesMobileWidth ? 'panes below' : 'right panes'} and these changes
          will be reflected in the exit intent modal on this page
        </Description>
      </Header>

      <Section>
        <SyntaxHighlighter language="json" style={codeTheme}>
          {JSON.stringify(settings, null, 2)}
        </SyntaxHighlighter>

        <SectionContent>
          <Fieldset>
            <Legend>desktop</Legend>

            <Label>
              triggerOnIdle:
              <input
                checked={settings?.desktop?.triggerOnIdle}
                type="checkbox"
                onChange={({ target }) => {
                  updateSettings({
                    desktop: {
                      triggerOnIdle: target.checked,
                    },
                  })
                }}
              />
            </Label>

            <Label>
              triggerOnMouseLeave:
              <input
                checked={settings?.desktop?.triggerOnMouseLeave}
                type="checkbox"
                onChange={({ target }) => {
                  updateSettings({
                    desktop: {
                      triggerOnMouseLeave: target.checked,
                    },
                  })
                }}
              />
            </Label>

            <Label>
              delayInSecondsToTrigger:
              <input
                defaultValue={settings?.desktop?.delayInSecondsToTrigger}
                type="number"
                onChange={({ target }) => {
                  updateSettings({
                    desktop: {
                      delayInSecondsToTrigger: target.valueAsNumber,
                    },
                  })
                }}
              />
            </Label>

            <Label>
              mouseLeaveDelayInSeconds:
              <input
                defaultValue={settings?.desktop?.mouseLeaveDelayInSeconds}
                type="number"
                onChange={({ target }) => {
                  updateSettings({
                    desktop: {
                      mouseLeaveDelayInSeconds: target.valueAsNumber,
                    },
                  })
                }}
              />
            </Label>

            <Label>
              useBeforeUnload:
              <input
                checked={settings?.desktop?.useBeforeUnload}
                type="checkbox"
                onChange={({ target }) => {
                  updateSettings({
                    desktop: {
                      useBeforeUnload: target.checked,
                    },
                  })
                }}
              />
            </Label>
          </Fieldset>

          <Fieldset>
            <Legend>mobile</Legend>

            <Label>
              triggerOnIdle:
              <input
                checked={settings?.mobile?.triggerOnIdle}
                type="checkbox"
                onChange={({ target }) => {
                  updateSettings({
                    mobile: {
                      triggerOnIdle: target.checked,
                    },
                  })
                }}
              />
            </Label>

            <Label>
              delayInSecondsToTrigger:
              <input
                defaultValue={settings?.mobile?.delayInSecondsToTrigger}
                type="number"
                onChange={({ target }) => {
                  updateSettings({
                    mobile: {
                      delayInSecondsToTrigger: target.valueAsNumber,
                    },
                  })
                }}
              />
            </Label>
          </Fieldset>
        </SectionContent>
      </Section>

      <Footer>
        <StateContainer>
          <span>
            willBeTriggered: <strong>{String(willBeTriggered)}</strong>
          </span>

          <Separator />

          <span>
            isTriggered: <strong>{String(isTriggered)}</strong>
          </span>

          <Separator />

          <span>
            isUnsubscribed: <strong>{String(isUnsubscribed)}</strong>
          </span>
        </StateContainer>

        <ResetControls>
          <Button onClick={() => resetState && resetState()} as="button">
            Reset state
          </Button>

          <Button onClick={() => resetSettings && resetSettings()} as="button">
            Reset settings
          </Button>
        </ResetControls>
      </Footer>

      <RadixDialog.Root open={isOpen} onOpenChange={handleJustCloseModal}>
        <ExitIntentModal
          unsubscribe={handleCloseModalUnsubscription}
          onDismiss={() => handleJustCloseModal(!open)}
        />
      </RadixDialog.Root>
    </BaseLayout>
  )
}
