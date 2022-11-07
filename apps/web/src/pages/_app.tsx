import { motion, AnimatePresence } from 'framer-motion'

import { RootContainer, Footer } from 'components'

import type { AppProps } from 'next/app'

import 'styles/global'

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <RootContainer>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: 'linear', opacity: { duration: 0.5 } }}
          variants={{
            hidden: { opacity: 0 },
            enter: { opacity: 1 },
            exit: { opacity: 0 },
          }}
        >
          <Component {...pageProps} />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </RootContainer>
  )
}
