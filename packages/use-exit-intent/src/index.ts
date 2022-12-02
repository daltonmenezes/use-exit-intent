import { useEffect, useState, useCallback, useRef } from 'react'
import Cookies from 'js-cookie'

export * from './types'

import {
  contexts,
  isMobile,
  isDesktop,
  createDebounce,
  defaultSettings,
  createIdleEvents,
  removeIdleEvents,
  secondsToMiliseconds,
  processHandlersByDeviceContext,
} from './utils'

import {
  ExitIntentHandler,
  ExitIntentSettings,
  InternalExitIntentSettings,
} from './types'

export function useExitIntent(props: ExitIntentSettings | void = {}) {
  const initialSettings: InternalExitIntentSettings = {
    ...defaultSettings,

    cookie: {
      ...defaultSettings.cookie,
      ...props?.cookie,
    },

    desktop: {
      ...defaultSettings.desktop,
      ...props?.desktop,
    },

    mobile: {
      ...defaultSettings.mobile,
      ...props?.mobile,
    },
  }

  const [settings, setSettings] =
    useState<InternalExitIntentSettings>(initialSettings)

  const [isTriggered, setIsTriggered] = useState(false)
  const [isUnsubscribed, setIsUnsubscribed] = useState(false)

  const handlers = useRef<ExitIntentHandler[]>([]).current
  const shouldNotTrigger = useRef<boolean>(false)

  const { mobile, desktop, cookie } = settings
  const willBeTriggered = !(isUnsubscribed || isTriggered)

  shouldNotTrigger.current = isUnsubscribed || isTriggered

  const handleExitIntent = useCallback(() => {
    if (shouldNotTrigger.current) return

    setIsTriggered(true)

    handlers
      .filter((handler) => {
        const isDefault =
          handler.context?.filter(
            (context) =>
              context !== contexts.onDesktop && context !== contexts.onMobile
          ).length === 0

        return isDefault || handler.context?.includes(contexts.onTrigger)
      })
      .forEach(processHandlersByDeviceContext)
  }, [])

  const unsubscribe = useCallback(() => {
    Cookies.set(cookie.key, 'true', {
      expires: cookie.daysToExpire,
      sameSite: 'Strict',
    })

    handlers
      .filter((handler) => handler.context?.includes(contexts.onUnsubscribe))
      .forEach(processHandlersByDeviceContext)

    setIsUnsubscribed(true)
  }, [cookie?.key])

  const resetState = useCallback(() => {
    Cookies.remove(cookie?.key, { sameSite: 'Strict' })
    window.onbeforeunload = null

    setIsTriggered(false)
    setIsUnsubscribed(false)
  }, [cookie?.key])

  const resetSettings = useCallback(() => {
    resetState()
    setSettings(initialSettings)
  }, [])

  const registerHandler = useCallback((handler: ExitIntentHandler) => {
    const handlerAlreadyPushed = handlers.find(
      (registeredHandler) => registeredHandler.id === handler.id
    )

    const _handler: ExitIntentHandler = {
      ...handler,
      context: handler?.context || [],
    }

    if (handlerAlreadyPushed) {
      handlers[handlers.indexOf(handlerAlreadyPushed)] = _handler

      return
    }

    handlers.push(_handler)
  }, [])

  const updateSettings = useCallback(
    (settings: ExitIntentSettings = defaultSettings) => {
      const newSettings = settings as InternalExitIntentSettings

      resetState()

      setSettings((prevSettings) => ({
        ...(prevSettings || {}),
        ...(newSettings || {}),

        cookie: {
          ...(prevSettings?.cookie || {}),
          ...(newSettings?.cookie || {}),
        },

        desktop: {
          ...(prevSettings?.desktop || {}),
          ...(newSettings?.desktop || {}),
        },

        mobile: {
          ...(prevSettings?.mobile || {}),
          ...(newSettings?.mobile || {}),
        },
      }))
    },
    [settings]
  )

  useEffect(() => {
    setIsUnsubscribed(Cookies.get(cookie.key) === 'true')
  }, [])

  useEffect(() => {
    if (isMobile()) {
      const { execute, abort } = createDebounce(
        handleExitIntent,
        secondsToMiliseconds(mobile?.delayInSecondsToTrigger!)
      )

      if (shouldNotTrigger.current) {
        removeIdleEvents(execute)
        return
      }

      if (isMobile() && mobile?.triggerOnIdle) {
        removeIdleEvents(execute)
        createIdleEvents(execute)
      }

      return () => {
        abort()
        removeIdleEvents(execute)
      }
    }

    if (isDesktop()) {
      const { execute, abort } = createDebounce(
        handleExitIntent,
        secondsToMiliseconds(desktop?.delayInSecondsToTrigger!)
      )

      if (desktop?.triggerOnIdle) {
        createIdleEvents(execute)
      }

      if (desktop?.triggerOnMouseLeave) {
        document.body.addEventListener('mouseleave', handleExitIntent)
      }

      if (desktop?.useBeforeUnload) {
        window.onbeforeunload = () => {
          if (shouldNotTrigger.current) return

          handleExitIntent()

          return ''
        }
      }

      return () => {
        abort()
        removeIdleEvents(execute)
        document.body.removeEventListener('mouseleave', handleExitIntent)
      }
    }
  })

  return {
    settings,
    resetState,
    isTriggered,
    unsubscribe,
    resetSettings,
    updateSettings,
    isUnsubscribed,
    registerHandler,
    willBeTriggered,
  }
}
