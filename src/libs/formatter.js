const fs = require('fs')
const path = require('path')

module.exports = {
  inputToArray (source) {
    let ary = []
    for (let key in source) {
      const val = source[key].replace(/\;/, '')
      ary.push({
        shortKey: key,
        name: val,
        content: val
      })
    }
    return ary
  },

  outputToObject (list) {
    let obj = {}
    list.forEach(el => {
      obj[el.name] = {
        prefix: el.shortKey,
        body: el.content
      }
    })
    return obj 
  },

  outputFile (data) {
    const json = JSON.stringify(data, null, 2)
    const filepath = path.resolve(__dirname, '../../snippets/snippets.json')
    fs.writeFile(filepath, json, 'utf8', err => {
      if (err)
        console.error(err)
      else
        console.log('\x1b[33m%s\x1b[0m', 'snippets.json saved!')
    })
  }
}

