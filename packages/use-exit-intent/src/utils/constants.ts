import { Context, InternalExitIntentSettings } from '../types'

export const contexts: { [key in Exclude<Context, '' | void>]: Context } = {
  onMobile: 'onMobile',
  onTrigger: 'onTrigger',
  onDesktop: 'onDesktop',
  onUnsubscribe: 'onUnsubscribe',
}

export const defaultSettings: InternalExitIntentSettings = {
  cookie: {
    daysToExpire: 30,
    key: 'exit-intent',
  },
  desktop: {
    triggerOnIdle: false,
    useBeforeUnload: false,
    triggerOnMouseLeave: true,
    delayInSecondsToTrigger: 10,
    mouseLeaveDelayInSeconds: 5,
  },

  mobile: {
    triggerOnIdle: true,
    delayInSecondsToTrigger: 10,
  },
}
