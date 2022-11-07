import { isClientSide } from './clientSide'
import { isMobile } from './mobile'

export function isDesktop() {
  if (!isClientSide()) return

  return !isMobile()
}
