import { ExitIntentHandler } from '../types'
import { isDesktop, isMobile } from './is'

export function processHandlersByDeviceContext(handler: ExitIntentHandler) {
  const hasDesktopEvent = handler.context?.includes('onDesktop')
  const hasMobileEvent = handler.context?.includes('onMobile')
  const isDefault = !hasDesktopEvent && !hasMobileEvent

  if (isDefault) {
    handler.handler()
  }

  if (hasDesktopEvent && isDesktop()) {
    handler.handler()
  }

  if (hasMobileEvent && isMobile()) {
    handler.handler()
  }
}
