import { useRef, useEffect, RefObject, useCallback } from 'react'

import { createDebounce } from 'shared/utils'

const defaultOptions = {
  offset: 0,
  timeout: 500,
}

export type IntersectionChecker = {
  element: HTMLElement
  offset: number

  position: {
    x: number
    y: number
  }
}

export type UseIntersectionOptions = typeof defaultOptions
export type Callback = (props: CallbackProps) => void

type CallbackProps = {
  position: IntersectionChecker['position']
  ref: RefObject<Element | any>
}

type InternalCallback = {
  id: string
  callback: (props: CallbackProps) => void
}

function checkIntersection({ element, offset, position }: IntersectionChecker) {
  const { top, height } = element.getBoundingClientRect()
  const elementY = Math.abs(top + position.y - offset)
  const bottom = elementY + height - offset

  if (elementY < offset && position.y <= elementY && position.y <= bottom) {
    return true
  }

  return position.y > elementY && position.y < bottom
}

export function useElementIntersection(
  options: UseIntersectionOptions = defaultOptions
) {
  const ref = useRef<HTMLElement | any>(null)
  const lastIntersection = useRef<boolean>(false)
  const position = useRef({ x: 0, y: 0 }).current
  const callbacks = useRef<InternalCallback[]>([]).current

  useEffect(() => {
    const { execute, abort } = createDebounce(
      handleScroll,
      options.timeout || defaultOptions.timeout
    )

    function handleScroll() {
      const documentElement = document.documentElement
      position

      const left =
        (window.pageXOffset || documentElement.scrollLeft) -
        (documentElement.clientLeft || 0)

      const top =
        (window.pageYOffset || documentElement.scrollTop) -
        (documentElement.clientTop || 0)

      const homeCallbacks = callbacks.find((callback) => callback.id === 'home')

      if (homeCallbacks && top === 0) {
        homeCallbacks.callback({ position, ref })
        return
      }

      const isIntersecting = checkIntersection({
        element: ref.current,
        offset: options.offset,

        position: {
          x: left,
          y: top,
        },
      })

      const isIntersectionChanged = lastIntersection.current !== isIntersecting

      if (!isIntersectionChanged) return

      if (isIntersectionChanged) {
        lastIntersection.current = isIntersecting
      }

      if (!isIntersecting) return

      callbacks.forEach(({ callback }) => callback({ ref, position }))
    }

    window.addEventListener(`scroll`, execute)

    return () => {
      abort()
      window.removeEventListener(`scroll`, execute)
    }
  })

  const onIntersect = useCallback((id: string, callback: Callback) => {
    const alreadyPushed = callbacks.find(
      (prevCallback) => prevCallback.id === id
    )

    if (alreadyPushed) {
      callbacks[callbacks.indexOf(alreadyPushed)] = {
        id,
        callback,
      }

      return
    }

    callbacks.push({ id, callback })
  }, [])

  return {
    ref,
    onIntersect,
  }
}
