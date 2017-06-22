const source = require('emmet/lib/snippets.json').css.snippets
const formatter = require('./libs/formatter')
const { unsupport, adds, values, property } = require('./libs/handlers')

const converter = {
  snippets: [],

  input (source) {
    this.snippets = formatter.inputToArray(source)
    return this
  },

  handler (handlers) {
    handlers.forEach(handle => {
      this.snippets = handle(this.snippets)
    })
    return this
  },

  output () {
    const data = formatter.outputToObject(this.snippets)
    formatter.outputFile(data)
    return this
  }
}

converter
.input(source)
.handler([unsupport, adds, values, property])
.output()

// console.dir(converter.snippets, { colors: true })