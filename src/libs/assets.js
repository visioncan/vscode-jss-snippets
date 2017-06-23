module.exports = {
  unsupportMap: ['@import', '@media', '@f', '@f+', '@i', '@m', '@kf', 'cm'],
  addsnip: {
    '@m': "'@media ${1:screen}': {\n\t$0\n}",
    '@kf': "'@keyframes ${1:identifier}': {\n\t${2:from}: { ${3} },\n\t${4:to}: { ${5} }\n}",
    '@f': "@font-face {\n\tfontFamily: $0\n\tsrc:url({$1:url})\n}$0",
    // JSS plugin
    '@g': "'@global': {\n\t$0\n}",
    'ext': "extend: $0",
    'com': "composes: $0",
    // Pseudo
    '&ac': "'&:active': {\n\t$0\n}",
    '&a': "'&:after': {\n\t$0\n}",
    '&b': "'&:before': {\n\t$0\n}",
    '&c': "'&:checked': {\n\t$0\n}",
    '&d': "'&:disabled': {\n\t$0\n}",
    '&e': "'&:enabled': {\n\t$0\n}",
    '&fc': "'&:first-child': {\n\t$0\n}",
    '&fle': "'&:first-letter': {\n\t$0\n}",
    '&fli': "'&:first-line': {\n\t$0\n}",
    '&f': "'&:focus': {\n\t$0\n}",
    '&h': "'&:hover': {\n\t$0\n}",
    '&ln': "'&:lang()': {\n\t$0\n}",
    '&lc': "'&:last-child': {\n\t$0\n}",
    '&li': "'&:link': {\n\t$0\n}",
    '&nc': "'&:nth-child()': {\n\t$0\n}",
    '&v': "'&:visited': {\n\t$0\n}",
    '&tg': "'&:target': {\n\t$0\n}",
    '&fot': "'&:first-of-type': {\n\t$0\n}",
    '&lot': "'&:last-of-type': {\n\t$0\n}",
    '&not': "'&:nth-of-type()': {\n\t$0\n}",
    '&no': "'&:not()': {\n\t$0\n}"
  }
}



