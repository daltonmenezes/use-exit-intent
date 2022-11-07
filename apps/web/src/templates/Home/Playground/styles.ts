import { BoxStyles, Separator as BaseSeparator } from 'components'
import { styled } from 'styles'

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1rem',
  height: '100%',
  width: '100%',

  pre: {
    ...BoxStyles,

    fontSize: '0.8rem',
    fontFamily: 'inherit',
    lineHeight: '1.5',
    textAlign: 'left',
    width: '100%',
    color: '$accent-secondary',
    padding: '1rem',
  },

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
  alignSelf: 'center',
  width: '100%',
})

export const Title = styled('h2', {
  fontSize: '3rem',
  lineHeight: '4.25rem',
  color: '$accent-secondary',
  textAlign: 'center',

  '@bp4': {
    textAlign: 'left',
  },
})

export const Description = styled('p', {
  fontSize: '0.9rem',
  lineHeight: '1.5rem',
  color: '$text-support',

  strong: {
    color: '$accent-secondary',
  },

  '@bp4': {
    maxWidth: '37rem',
  },
})

export const Fieldset = styled('fieldset', {
  ...BoxStyles,
  flexDirection: 'column',
  flex: '1',
  alignItems: 'baseline',
  width: '100%',
  gap: '1rem',
  padding: '1rem',
  position: 'relative',
})

export const Legend = styled('legend', {
  color: '$accent-secondary',
  right: '1rem',
  position: 'absolute',
})

export const Label = styled('label', {
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
  lineHeight: '1.5rem',

  'input[type="text"], input[type="number"]': {
    ...BoxStyles,

    width: '4rem',
    height: '2.2rem',
    padding: '0.5rem',
    borderRadius: 4,
    color: '$accent-secondary',
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
})

export const Footer = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  gap: '1rem',

  '@bp4': {
    gap: 0,
    flexDirection: 'row',
  },
})

export const StateContainer = styled('div', {
  ...BoxStyles,

  flexFlow: 'column wrap',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '1rem',
  padding: '1rem',
  borderRadius: 4,
  width: '100%',

  span: {
    strong: {
      color: '$accent-secondary',
      fontWeight: 400,
    },
  },

  '@bp4': {
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5rem 1rem',
    maxWidth: '37.858125rem',
    gap: '0.5rem',
  },
})

export const ResetControls = styled('div', {
  display: 'flex',
  gap: '0.5rem',

  width: '100%',

  button: {
    flex: 1,
  },

  '@bp4': {
    width: '100%',
    minWidth: '30.13875rem',
    marginLeft: '1rem',
    justifyContent: 'flex-end',

    gap: '0.5rem',

    button: {
      flex: 'unset',
    },
  },
})

export const Separator = styled(BaseSeparator, {
  display: 'none',

  '@bp4': {
    display: 'flex',
  },
})
