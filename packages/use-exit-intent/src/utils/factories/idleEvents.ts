export function createIdleEvents(callback: () => void) {
  removeIdleEvents(callback)

  window.addEventListener('load', callback, true)
  window.addEventListener('mousemove', callback, true)
  window.addEventListener('mousedown', callback, true)
  window.addEventListener('keydown', callback, true)
  window.addEventListener('touchstart', callback, true)
  window.addEventListener('click', callback, true)
  window.addEventListener('scroll', callback, true)
}

export function removeIdleEvents(callback: () => void) {
  window.removeEventListener('load', callback, true)
  window.removeEventListener('mousemove', callback, true)
  window.removeEventListener('mousedown', callback, true)
  window.removeEventListener('keydown', callback, true)
  window.removeEventListener('touchstart', callback, true)
  window.removeEventListener('click', callback, true)
  window.removeEventListener('scroll', callback, true)
}
