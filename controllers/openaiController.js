const openai = require('../config/openaiConfig')

const generateMeta = async (req, res) => {
  const {title} = req.body

  const description = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: 'user',
        content: `Tte numesti Ion si esti un Consiler Guvernamental. Raspunzi cu informatii scurte si in raspunsurile tale mentionezi ca informatiile oficiale se iau de pe site urile.gov sau de la institutiile abilitate. ${title}`
      }
    ],
    max_tokens: 300
  })

  console.log(description.data.choices[0].message)


  res.status(200).json({
    description: description.data.choices[0].message,
  })
}


module.exports = { generateMeta}