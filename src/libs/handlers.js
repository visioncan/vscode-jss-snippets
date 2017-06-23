const camelCase = require('camelcase')
const formater = require('./formatter')
const { unsupportMap, addsnip } = require('./assets')

module.exports = {
  unsupport (snippets) {
    return snippets.filter(item => {
      return unsupportMap.indexOf(item.shortKey) === -1
    })
  },

  adds (snippets) {
    return snippets.concat(formater.inputToArray(addsnip))
  },

  property (snippets) {
    return snippets.map(item => {
      item.shortKey = `j${item.shortKey}`
      item.content = item.content.replace(/^([a-z-]+)\:/, prop => `${camelCase(prop)} `)
      return item
    })
  },

  values (snippets) {
    return snippets.map(item => {
      item.content = item.content
        .replace('|', '$0')
        .replace(/\:(.*)$/, (m, values) => {
          values = values.replace(/\'/g, '\\"')
          return `:\'${values}\'`
        })
      return item
    })
  }
}
