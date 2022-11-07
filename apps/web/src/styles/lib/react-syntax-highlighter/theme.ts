export const codeTheme = {
  'code[class*="language-"]': {
    textAlign: 'left',
    graySpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    color: '#eee',
    fontFamily: 'Roboto Mono, monospace',
    fontSize: '1em',
    lineHeight: '1.5em',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
  },

  'pre[class*="language-"]': {
    textAlign: 'left',
    graySpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    color: '#eee',
    fontFamily: 'Roboto Mono, monospace',
    fontSize: '1em',
    lineHeight: '1.5em',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    overflow: 'auto',
    position: 'relative',
    // margin: '0.5em 0',
    // padding: '1.25em 1em',
  },

  'code[class*="language-"]::-moz-selection': {
    background: '#363636',
  },

  'pre[class*="language-"]::-moz-selection': {
    background: '#363636',
  },

  'code[class*="language-"] ::-moz-selection': {
    background: '#363636',
  },

  'pre[class*="language-"] ::-moz-selection': {
    background: '#363636',
  },

  'code[class*="language-"]::selection': {
    background: '#363636',
  },

  'pre[class*="language-"]::selection': {
    background: '#363636',
  },

  'code[class*="language-"] ::selection': {
    background: '#363636',
  },

  'pre[class*="language-"] ::selection': {
    background: '#363636',
  },

  ':not(pre) > code[class*="language-"]': {
    graySpace: 'normal',
    borderRadius: '0.2em',
    padding: '0.1em',
  },

  '.language-css > code': {
    color: '#FD6584',
  },

  '.language-sass > code': {
    color: '#FD6584',
  },

  '.language-scss > code': {
    color: '#FD6584',
  },

  '[class*="language-"] .namespace': {
    Opacity: '0.7',
  },

  atrule: {
    color: '#FD6584',
  },

  'attr-name': {
    color: '#64ffa4',
  },

  'attr-value': {
    color: '#FD6584',
  },

  attribute: {
    color: '#FD6584',
  },

  boolean: {
    color: '#FD6584',
  },

  builtin: {
    color: '#ffcb6b',
  },

  cdata: {
    color: '#646cff',
  },

  char: {
    color: '#646cff',
  },

  class: {
    color: '#ffcb6b',
  },

  'class-name': {
    color: '#646cff',
  },

  comment: {
    color: '#616161',
  },

  constant: {
    color: '#FD6584',
  },

  deleted: {
    color: '#FD6584',
  },

  doctype: {
    color: '#616161',
  },

  entity: {
    color: '#FD6584',
  },

  function: {
    color: '#646cff',
  },

  hexcode: {
    color: '#f2ff00',
  },

  id: {
    color: '#FD6584',
    fontWeight: 'bold',
  },

  important: {
    color: '#FD6584',
    fontWeight: 'bold',
  },

  inserted: {
    color: '#646cff',
  },

  keyword: {
    color: '#FD6584',
  },

  number: {
    color: '#FD6584',
  },

  operator: {
    color: 'gray',
  },

  prolog: {
    color: '#616161',
  },

  property: {
    color: '#646cff',
  },

  'pseudo-class': {
    color: '#FD6584',
  },

  'pseudo-element': {
    color: '#FD6584',
  },

  punctuation: {
    color: 'gray',
  },

  regex: {
    color: '#f2ff00',
  },

  selector: {
    color: '#FD6584',
  },

  string: {
    color: '#FD6584',
  },

  symbol: {
    color: '#FD6584',
  },

  tag: {
    color: '#FD6584',
  },

  unit: {
    color: '#FD6584',
  },

  url: {
    color: '#FD6584',
  },

  variable: {
    color: '#FD6584',
  },
} as { [key: string]: React.CSSProperties }
