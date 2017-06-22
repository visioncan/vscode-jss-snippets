const camelCase = require('camelcase')
const formater = require('./formater')

const unsupportMap = ['@import', '@media', '@f', '@i', '@m', '@f+', '@kf']

const addonsnip = {
  "@m": "'@media ${1:screen}': {\n\t$0\n}",
  "@kf": "'@keyframes ${1:identifier}': {\n\t${2:from}: { ${3} },\n\t${4:to}: { ${5} }\n}"
}

module.exports = {
  unsupport (snippets) {
    return snippets.filter(item => {
      return unsupportMap.indexOf(item.shortKey) === -1
    })
  },

  adds (snippets) {
    return snippets.concat(formater.inputToArray(addonsnip))
  },

  property (snippets) {
    return snippets.map(item => {
      item.content = item.content.replace(/^([a-z-]+)\:/, prop => `${camelCase(prop)} `)
      return item
    })
  },

  values (snippets) {
    return snippets.map(item => {
      item.content = item.content
        .replace('|', '$0')
        // .replace(/\:([a-z-]+)$/, (m, values) => {
        .replace(/\:(.*)$/, (m, values) => {
          values = values.replace(/\'/g, '\\\'')
          return `:\'${values}\'`
        })
      return item
    })
  }
}

// snippets.forEach(el => {
//   console.log('%o', 
//     el.val = el.val
//     .replace('|', '$0')
//     // .replace(/^([a-z-]+)\:/, prop => camelCase(prop))
//     .replace(/\:([a-z-]+)$/, (m, values) => {
//       return `:\'${values}\'`
//     })
//   )
// })