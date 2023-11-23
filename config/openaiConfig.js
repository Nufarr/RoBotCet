const { Configuration, OpenAIApi } = require('openai')
require('dotenv').config()

const configuration = new Configuration({
  apiKey:'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',
})

const openai = new OpenAIApi(configuration)

module.exports = openai