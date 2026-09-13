const apiKey = "0c43933b62ea77bc0d5e41b719e32810"; 
const villages = {
  "Diwancheruvu": {lat:16.99, lon:81.79},
  "Rajahmundry": {lat:16.98, lon:81.78},
  "Rajanagaram": {lat:17.0, lon:81.8},
  "Korukonda": {lat:17.1, lon:81.9},
  "Gokavaram": {lat:17.3, lon:82.0},
  "Kakinada": {lat:16.96, lon:82.23},
  "Samalkot": {lat:17.05, lon:82.17},
  "Peddapuram": {lat:17.08, lon:82.13},
  "Anaparthi": {lat:16.91, lon:81.99},
  "Mandapeta": {lat:16.87, lon:81.93},
  "Ravulapalem": {lat:16.85, lon:81.82},
  "Amalapuram": {lat:16.58, lon:82.01},
  "Mummidivaram": {lat:16.62, lon:82.11},
  "Kothapeta": {lat:16.77, lon:82.07},
  "Tuni": {lat:17.35, lon:82.55},
  "Prathipadu": {lat:17.25, lon:82.2},
  "Visakhapatnam": {lat:17.68, lon:83.21},
  "Vijayawada": {lat:16.51, lon:80.64},
  "Eluru": {lat:16.71, lon:81.1},
  "Bhimavaram": {lat:16.54, lon:81.53},
  "Tanuku": {lat:16.75, lon:81.68},
  "Nidadavolu": {lat:16.91, lon:81.67},
  "Palakollu": {lat:16.53, lon:81.73},
  "Kovvur": {lat:17.02, lon:81.73},
  "Jaggampeta": {lat:17.27, lon:82.06},
  "Rampachodavaram": {lat:17.45, lon:82.0},
  "Pithapuram": {lat:17.11, lon:82.27},
  "Yeleswaram": {lat:17.3, lon:82.13},
  "Gollaprolu": {lat:17.2, lon:82.3},
  "Pragada": {lat:17.4, lon:82.4},
  "Cheepurupalli": {lat:18.28, lon:83.57},
  "Rajam": {lat:18.28, lon:83.65},
  "Palasa": {lat:18.77, lon:84.41},
  "Ichchapuram": {lat:19.11, lon:84.7},
  "Sompeta": {lat:18.95, lon:84.6},
  "Kaviti": {lat:19.05, lon:84.7},
  "Parvathipuram": {lat:18.78, lon:83.43},
  "Bobilli": {lat:18.57, lon:83.36},
  "Salur": {lat:18.53, lon:83.21},
  "Vizianagaram": {lat:18.11, lon:83.41},
  "Srikakulam": {lat:18.3, lon:83.9},
  "Narasapuram": {lat:16.44, lon:81.7},
  "Machilipatnam": {lat:16.17, lon:81.13},
  "Gudivada": {lat:16.43, lon:81.0},
  "Tenali": {lat:16.24, lon:80.64},
  "Guntur": {lat:16.29, lon:80.44},
  "Ongole": {lat:15.5, lon:80.05},
  "Nellore": {lat:14.45, lon:79.99},
  "Tirupati": {lat:13.63, lon:79.42}
};


const select = document.getElementById("villageSelect");
for (let name in villages) 
{
  let option = document.createElement("option");
  option.value = name;
  option.textContent = name;
  select.appendChild(option);
}

document.getElementById("searchBtn").addEventListener("click", () => {
  const villageName = select.value;
  if (villageName === "-- Select Village --") 
  {
    alert("Please select a village!");
    return;
  }
  const {lat, lon} = villages[villageName];
  getWeather(lat, lon);
});

function getWeather(lat, lon) 
{
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (data.cod !== 200) 
      {
        document.getElementById("result").innerText = "Weather data not found!";
        return;
      }
      document.getElementById("result").innerHTML = 
        <h3>${data.name}</h3>
        <p>🌡️ Temperature: ${data.main.temp} °C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>☁️ Condition: ${data.weather[0].description}</p>
        <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
      ;
    })
    .catch(err => console.error(err));
}
