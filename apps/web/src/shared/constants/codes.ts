export const codes = {
  overview: {
    default: `
    import { useExitIntent } from 'use-exit-intent'

    export default function App() {
      const { unsubscribe, registerHandler } = useExitIntent()

      registerHandler({
        id: 'openModal',
        handler: () => console.log('First handler')
      })

      registerHandler({
        id: 'anotherHandler',
        handler: () => console.log('Another handler'),
        context: ['onUnsubscribe', 'onMobile']
      })

      const handleUnsubscription = () => unsubscribe()

      // ...
    }
    `,

    config: `
    export default function App() {
      const exitIntent = useExitIntent({
        "cookie": {
          "daysToExpire": 30,
          "key": "exit-intent"
        },

        "desktop": {
          "triggerOnIdle": false,
          "useBeforeUnload": false,
          "triggerOnMouseLeave": true,
          "delayInSecondsToTrigger": 10,
          "mouseLeaveDelayInSeconds": 5
        },

        "mobile": {
          "triggerOnIdle": true,
          "delayInSecondsToTrigger": 10
        }
      })
      // ...
    `,
  },
} as const
