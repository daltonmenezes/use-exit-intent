import { styled, animations } from 'styles'
import { BoxStyles } from 'components'

export const CodeContainer = styled('div', {
  width: '100%',
  overflowX: 'auto',
  overflowY: 'hidden',

  pre: {
    ...BoxStyles,

    color: '$accent-secondary',
    fontSize: '0.8rem',
    fontFamily: 'inherit',
    lineHeight: '1.5',
    textAlign: 'left',
    width: '100%',
    maxHeight: 546,
    padding: '0 1.4rem 1.4rem 1.4rem',
    animation: `${animations.reveal} 0.5s ease-in-out`,
  },

  'pre code span': {
    transition: 'all 0.25s ease-in-out',
  },

  variants: {
    exampleState: {
      '0': {},

      '1': {
        'pre code': {
          'span:nth-of-type(-n + 40), span:nth-of-type(n + 115)': {
            filter: 'opacity(0.2) grayscale(100%)',
          },
        },
      },

      '2': {
        'pre code': {
          'span:nth-of-type(-n + 13), span:nth-of-type(n + 109)': {
            filter: 'opacity(0.2) grayscale(100%)',
          },
        },
      },

      '3': {
        'pre code': {
          'span:nth-of-type(-n + 99), span:nth-of-type(n + 109)': {
            filter: 'opacity(0.2) grayscale(100%)',
          },
        },
      },

      '4': {
        'pre code': {
          'span:nth-of-type(-n + 112), span:nth-of-type(n + 130)': {
            filter: 'opacity(0.2) grayscale(100%)',
          },
        },
      },
    },
  },

  defaultVariants: {
    exampleState: 0,
  },
})

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1rem',
  height: '100%',
  width: '100%',

  '@bp4': {
    flexDirection: 'row',
  },
})

export const SectionContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
  minHeight: '100%',
})

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  alignSelf: 'center',
  width: '100%',

  '@bp4': {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    width: 'fit-content',
  },
})

export const Title = styled('h2', {
  fontSize: '3rem',
  lineHeight: '4.25rem',
  color: '$accent-secondary',
})

export const Description = styled('p', {
  fontSize: '0.9rem',
  lineHeight: '1.5rem',
  color: '$text-support',
  width: '100%',
  paddingBottom: '3rem',

  strong: {
    fontSize: '1rem',
    color: '$accent-secondary',
  },

  'strong:nth-of-type(even)': {
    color: '$accent-primary',
  },

  '@bp4': {
    paddingBottom: '1rem',
    width: '28rem',
  },
})

export const FeatureCard = styled('li', {
  ...BoxStyles,

  alignItems: 'center',
  gap: '1rem',
  width: '100%',
  padding: '1.215rem',
  borderRadius: 0,

  '&:first-of-type': {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },

  '&:last-of-type': {
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },

  '&:hover': {
    cursor: 'default',
  },

  '@bp4': {
    maxWidth: '30rem',
  },
})
