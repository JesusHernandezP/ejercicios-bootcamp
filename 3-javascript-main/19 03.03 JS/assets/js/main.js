// Variables
const api_url = 'https://goweather.herokuapp.com/weather'

// Variables que hacen referencia a algun elemento del HTML (DOM)
const form = document.querySelector('form.weather-form')
const app = document.querySelector('.app')

// Manejo de eventos
form.addEventListener('submit', formSubmitHandler)

// Funciones relacionadas con los eventos
async function formSubmitHandler(e) {
  e.preventDefault()
  const city = e.target.city.value
  const city_data = await getData(city)
  console.log(city_data)
  render(city_data)
}

async function getData(city) {
  try {
    // const response = await fetch(`${api_url}/${city}`)
    // const data = await response.json()
    // return data

    return {"temperature":"12 °C","wind":"6 km/h","description":"Sunny","forecast":[{"day":"1","temperature":"12 °C","wind":"2 km/h"},{"day":"2","temperature":"13 °C","wind":"7 km/h"},{"day":"3","temperature":"+10 °C","wind":"22 km/h"}]}

  } catch (error) {
    console.error(error)
  }
}

function render(city) {
  const description = city.description
  const temperature = city.temperature

  const html = `
    <article class="weather">
      <header class="weather__header">
        <img class="weather__description" src="./assets/images/icons/${description.trim().toLowerCase()}.svg" alt="" />
        <h3 class="weather__title">${temperature}</h3>
      </header>
    </article>
  `
  app.innerHTML = html
}