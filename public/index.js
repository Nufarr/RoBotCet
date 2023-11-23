// forms
const metaForm = document.querySelector('.ai')
const buletin =document.querySelector('.buletin')
const pensia=document.querySelector('.pensia')
const amenda=document.querySelector('.amenda')
// output elements
const description = document.querySelector('.description p')

// description and tags
metaForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const res = await fetch('/openai/meta', {
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({title: metaForm.title.value}),
    method: 'POST'
  })
  const data = await res.json()

  console.log(data)

  description.textContent = data.description.content
})

buletin.addEventListener('click', async (e) => {
  e.preventDefault()

  const res = await fetch('/openai/meta', {
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({title: "Unde merg daca am pierdut buletinul? La ce institutie?"}),
    method: 'POST'
  })
  const data = await res.json()

  console.log(data)

  description.textContent = data.description.content
})

pensia.addEventListener('click', async (e) => {
  e.preventDefault()

  const res = await fetch('/openai/meta', {
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({title: "Unde merg ca sa imi ridic pensia? La ce institutie?Cum se procedeaza in romania pentru a ridica pensia"}),
    method: 'POST'
  })
  const data = await res.json()

  console.log(data)

  description.textContent = data.description.content
})

amenda.addEventListener('click', async (e) => {
  e.preventDefault()

  const res = await fetch('/openai/meta', {
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({title: "Spune-mi cum se procedeaza in Romania pentru a plati o amenda"}),
    method: 'POST'
  })
  const data = await res.json()

  console.log(data)

  description.textContent = data.description.content
})