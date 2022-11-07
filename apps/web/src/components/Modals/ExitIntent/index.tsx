import * as RadixDialog from '@radix-ui/react-dialog'

import { ExternalLink, Button } from 'components'
import { getPublicPath } from 'shared/utils'
import { library } from 'shared/constants'

import {
  Tag,
  Image,
  Title,
  Overlay,
  Content,
  Container,
  CloseButton,
  ContentGroup,
} from './styles'

interface ModalProps {
  onDismiss: () => void
  unsubscribe: () => void
}

export function ExitIntentModal({ onDismiss, unsubscribe }: ModalProps) {
  return (
    <RadixDialog.Portal>
      <Overlay />

      <Container onInteractOutside={(event) => event.preventDefault()}>
        <CloseButton>X</CloseButton>

        <Content>
          <Image />

          <ContentGroup>
            <Tag>Thanks for the visit!</Tag>

            <Title>
              If you liked, drop a star on GitHub!
              <img src={getPublicPath('/sparkles.png')} alt="" />
            </Title>

            <ExternalLink href={library.url}>
              <Button tabIndex={-1}>Go to GitHub</Button>
            </ExternalLink>

            <Button onClick={onDismiss}>Just close this modal</Button>

            <Button onClick={unsubscribe}>
              Close and unsubscribe to the exit intent modal
            </Button>
          </ContentGroup>
        </Content>
      </Container>
    </RadixDialog.Portal>
  )
}
