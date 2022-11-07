import { isClientSide } from './clientSide'

export function isMobile() {
  if (!isClientSide()) return

  return (
    window.matchMedia('(hover: none)').matches ||
    navigator.userAgent.toLowerCase().includes('mobile')
  )
}
