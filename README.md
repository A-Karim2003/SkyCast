# Weather App

A modern, responsive weather application built with React that provides current weather conditions and forecasts with dynamic background images based on weather conditions.

## Features

- **Current Weather Display**: Shows current temperature, city name, and high/low temperatures
- **Hourly Forecast**: 24-hour forecast with weather icons and temperatures
- **5-Day Forecast**: Daily weather predictions with temperature ranges
- **Dynamic Backgrounds**: Background images change based on current weather conditions
- **Real-time Clock**: Live time and date display that updates every minute
- **City Search**: Search functionality to get weather for most location

## Screenshots

![cloud](/src/assets/cloud.jpeg)
![cloud](/src/assets/rain.jpeg)
![cloud](/src/assets/sun.jpeg)

The app features different background themes:

- Sunny/Clear skies
- Cloudy conditions
- Rainy weather
- Snowy conditions
- Windy weather
- Default theme

## Tech Stack

- **Frontend**: React 18+ with Hooks
- **Styling**: CSS3
- **API**: OpenWeatherMap API
- **Build Tool**: Vite
- **Language**: JavaScript (ES6+)

## Prerequisites

Before running this application, make sure you have:

- OpenWeatherMap API key
- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
   ```

4. **Get your API key**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   - Generate a free API key
   - Add it to your `.env` file

## Project Structure

```
src/
├── components/
│   ├── forecast/
│   │   ├── Forecast.jsx          # Main forecast component
│   │   ├── ForcastTimes.jsx      # Hourly forecast container
│   │   ├── ForcastDays.jsx       # Daily forecast container
│   │   ├── TimeWeather.jsx       # Individual hourly weather item
│   │   ├── ForecastWeather.jsx   # Individual daily weather item
│   │   ├── ForecastTitle.jsx     # Forecast section titles
│   │   ├── TimeWeatherContainer.jsx # Generic container
│   │   └── forcast.css           # Forecast styles
│   ├── Header.jsx                # App header with search
│   ├── Logo.jsx                  # App logo component
│   ├── SearchForm.jsx            # Weather search functionality
│   ├── Time.jsx                  # Live time display
│   ├── CurrentWeather.jsx        # Current weather display
│   ├── WeatherContents.jsx       # Weather content wrapper
│   ├── Main.jsx                  # Main content wrapper
│   └── background.jsx            # Background image component
├── assets/
│   ├── background/               # Weather background images
│   └── logo.png                  # App logo
├── App.jsx                       # Main app component
└── header.css                    # Header styles
```

## API Integration

The app integrates with OpenWeatherMap API:

- **Geocoding API**: Converts city names to coordinates
- **5-Day Weather Forecast API**: Provides weather data every 3 hours for 5 days

### API Endpoints Used

1. Geocoding: `http://api.openweathermap.org/geo/1.0/direct`
2. Weather Forecast: `https://api.openweathermap.org/data/2.5/forecast`

## Key Features Explained

### Weather Data Processing

- Hourly data: First 6 entries from API response
- Daily data: Groups by date and finds midday (12:00) entries
- Temperature ranges: Calculates min/max from daily entries
