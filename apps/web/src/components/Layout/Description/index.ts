import { styled } from 'styles'
import { BoxStyles } from '../Box'

export const Description = styled('p', {
  color: '$text-support',
  textAlign: 'center',

  '> code': {
    ...BoxStyles,

    width: 'fit-content',
    padding: '0.3rem',
    borderRadius: 4,
    backgroundColor: '$border-primary',
  },

  '@bp4': {
    textAlign: 'left',
  },
})
