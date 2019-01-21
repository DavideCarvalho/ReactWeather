import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=metric';

export const getTemp = async ({ location }: { location: string }) => {
  const encodedLocation = encodeURIComponent(location);
  const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
  return axios.get(requestUrl)
          .then((res) => {
            if (res.data.cod && res.data.message) { throw new Error(res.data.message); }
            return res.data.main.temp;
          });
}