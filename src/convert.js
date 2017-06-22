const source = require('emmet/lib/snippets.json').css.snippets
const formater = require('./libs/formater')
const { unsupport, adds, values, property } = require('./libs/handlers')

const converter = {
  snippets: [],

  input (source) {
    this.snippets = formater.inputToArray(source)
    return this
  },

  handler (handlers) {
    handlers.forEach(handle => {
      this.snippets = handle(this.snippets)
    })
    return this
  },

  output () {
    const data = formater.outputToObject(this.snippets)
    formater.outputFile(data)
    return this
  }
}

converter
.input(source)
.handler([unsupport, adds, values, property])
.output()

// console.dir(converter.snippets, { colors: true })