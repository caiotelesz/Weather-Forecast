import './index.css'

export function WeatherInfo5Days({ weather5Days }) {
  let dailyForecast = {}

  for(let forecast of weather5Days.list){
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if(!dailyForecast[date]) {
      dailyForecast[date] = forecast
    }
  }

  const nextFiveDays = Object.values(dailyForecast).slice(1, 6);

  function convertDate(date){
    const dateObject = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit'});
    
    return dateObject;
  }

  return (
    <div className='weather-container'>
      <h3>Previsão Próximos 5 Dias</h3>
      <div className='weather-list'>
      {nextFiveDays.map(forecast => {
        const iconCode = forecast.weather[0]?.icon;
        const descriptionCode = forecast.weather[0]?.description;

        return (
          <div key={forecast.dt} className='weather-item'>
            <p className='day'>{convertDate(forecast)}</p>
            <img src={`http://openweathermap.org/img/wn/${iconCode}.png`} alt="" />
            <p className='description'>{descriptionCode}</p>
            <p>{Math.round(forecast.main.temp_min)}°C min / {Math.round(forecast.main.temp_max)}°C máx</p>
          </div>
        )
      })}
      </div>
    </div>
  )
}
