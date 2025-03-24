import {useGetWeatherByCityQuery} from '../Redux/ApiSlice.jsx';
const WeatherDisplay = ({city}) => {
   

       const { data , error , isLoading} = useGetWeatherByCityQuery(city , {skip : !city  || city ===''});

       if(isLoading){
        return <p>Loading....</p>
       }
       
      if(error){
         return <p>{error.massage}</p>
      }
       
   if(!data){
    return<p>Please Enter a City</p>
   }

 
       const currentCondition = data.current_condition[0]
               
    console.log(currentCondition);

  return (
    <div className="weather-info">
      <h2>Weather in {city}</h2>
      <p>Temperature: {currentCondition.temp_C} °C</p>
      <p>Weather condition are {currentCondition.weatherDesc[0].value}</p>
    </div>
  );
};

export default WeatherDisplay;
