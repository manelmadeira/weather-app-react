import axios from 'axios';

const API_KEY = '6e237dc257b80ece2e97bbcfd9de9444';
const WEEK_URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';

const helpers = {
  getWeekForcast(city) {
    return axios.get(`${WEEK_URL}?q=${city}&units=metric&type=accurate&APPID=${API_KEY}`)
      .then((response) => {
        const data = response.data;

        return data;
      })
      .catch((error) => {
        console.error('Error getting week forecast: ', error);
      });
  }
};

export default helpers;
