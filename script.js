function getWeather() {
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value.trim();

  if (!city || !state) {
    alert("Please enter both city and state.");
    return;
  }

  const apiKey = config.apiKey;  // Use the key from config.js
  const query = `${city},${state}`;
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("location").textContent = data.location.name + ", " + data.location.region;
      document.getElementById("icon").src = "https:" + data.current.condition.icon;
      document.getElementById("temp").textContent = data.current.temp_f;
      document.getElementById("condition").textContent = data.current.condition.text;
      document.getElementById("feelslike").textContent = data.current.feelslike_f;
      document.getElementById("wind").textContent = data.current.wind_mph;
      document.getElementById("humidity").textContent = data.current.humidity;

      document.getElementById("result").style.display = "block";
    })
    .catch(error => {
      alert("Could not fetch weather. Please check your city/state and try again.");
      console.error(error);
    });
}

	
