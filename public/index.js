// forms
const metaForm = document.querySelector('.ai')

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
