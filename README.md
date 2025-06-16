My Weather App:

This application uses WeatherAPI.com to display current weather information in a specified city and state within the United States.


How to Setup:

1.Go to  https://www.weatherapi.com/ and create a free account.
2.Get API Key from the dashboard.
3 Create a file named `config.js` in the project root with the following content:

const config = {
  apiKey: "YOUR_ACTUAL_API_KEY_HERE"
};


How it works:

1.Download the zip file.
2.Open index.html in a web browser.
3.Type in the city and select the state.
4.Press "Get Weather" button.


Files:

1.index.html- This is what displays the webpage, takes in input, and keeps placeholders for the weather variables.
2.script.js- This script connects to API's website and extracts the current weather info based on the selected city and state. It then replaces the placeholder variables with the current info.
3.style.css- This script adds formatting/styling to the webpage.

