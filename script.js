const tems = document.getElementById('tems');
const min = document.getElementById('min');
const max = document.getElementById('max');
const pressure = document.getElementById('press')
const humidity = document.getElementById('humid')
const country = document.getElementById('count');
const main = document.getElementById('main');
const description = document.getElementById('desc')
const input = document.getElementById('input');
const butt = document.getElementById('butt');


const weather = (name) => {
  const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?';
const API_KEY = '4831afc16424f2d767d4011edd552880';
const CITY = `${name}`;

const url = `${BASE_URL}q=${CITY}&appid=${API_KEY}`;
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    count(data)
 })
  .catch(error => {
    console.error('Error:', error);
  });

}

const count = (rep) => {
  country.innerHTML = rep.sys.country;
  tems.innerHTML = rep.main.temp;
  min.innerHTML = rep.main.temp_min;
  max.innerHTML = rep.main.temp_max;
  pressure.innerHTML = rep.main.pressure
  humidity.innerHTML = rep.main.humidity
  main.innerHTML = rep.weather[0].main;
  description.innerHTML = rep.weather[0].description
}



butt.onclick = () => weather(input.value);
 


