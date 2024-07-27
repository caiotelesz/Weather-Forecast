import './index.css';

export function WeatherInfo({ weather }) {

  const iconCode = weather.weather[0]?.icon;
  const descriptionCode = weather.weather[0]?.description;

  return (
    <div className='weather-container'>
      <h2>{weather.name}</h2>
      <div className='weather-info'>
          <img 
            src={`http://openweathermap.org/img/wn/${iconCode}.png`} 
            alt="Ícone do tempo" 
          />
        <p className='weather-temp'>{Math.round(weather.main.temp)}°C</p>
      </div>
      <p className='weather-desc'>{descriptionCode}</p>

      <div className='weather-details'>
        <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
        <p>Umidade: {weather.main.humidity}%</p>
        <p>Pressão: {weather.main.pressure}</p>
      </div>
    </div>
  );
}
