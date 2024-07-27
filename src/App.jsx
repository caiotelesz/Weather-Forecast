import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useRef } from 'react'
import { WeatherInfo } from './components/WeatherInfo'
import { WeatherInfo5Days } from './components/WeatherInfo5Days'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()

  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = "c140965606cb658e32fd35184fc490d6"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const urlForecastFiveDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const responseData = await axios.get(url);
    setWeather(responseData.data);
    
    const forecastData = await axios.get(urlForecastFiveDays);
    setWeather5Days(forecastData.data);
  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInfo weather={weather}/>}
      {weather5Days && <WeatherInfo5Days weather5Days={weather5Days}/>}
    </div>
  )
}

export default App
