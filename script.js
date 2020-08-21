const app = document.getElementById('root')
console.log(app)

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

let request = new XMLHttpRequest()
request.open('GET', 'https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/movies-in-theaters.json', true)
request.onload = function () {
  // Begin accessing JSON data here
  let data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movie.title

      const p = document.createElement('p')
      movie.storyline = movie.storyline.substring(0, 400)
      p.textContent = `${movie.storyline}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()