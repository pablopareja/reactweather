var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=1d20adf6bae6ad4248d59d802d7ab052&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {

      if(res.data.cod && res.data.message){
        //console.log("error", res.data.cod, res.data.message);
        throw new Error("Unable to find city name");
      }else{
        //console.log("success",res.data.cod, res.data.message);
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res);
    });
  }
}
