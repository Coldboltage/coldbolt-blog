import React, { useState, useRef, useEffect, useCallback } from "react"
import Layout from "../../components/layout"
// import SEO from "../../components/seo"
import * as styles from "../../css/weather.module.css"
import { FaTemperatureHigh } from "react-icons/fa"
import { FaChevronDown } from "react-icons/fa"
import { FaChevronUp } from "react-icons/fa"
import { BiWorld } from "react-icons/bi"
import { GiThermometerHot } from "react-icons/gi"
import { WiHumidity } from "react-icons/wi"
import getUnicodeFlagIcon from 'country-flag-icons/unicode'

const Weather = () => {
  const [town, setTown] = useState("")
  const [weatherData, setWeatherData] = useState(null)
  const [execute, setExecute] = useState(false)
  const inputEl = useRef(null)

  console.log(weatherData)

  // Shall add this to an .env
  const API = "d0dd07eb2c1c7bb142e4af4f2a8b357e"

  // Creates a call to the Open weather API.
  const weatherCall = useCallback(async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${API}&units=metric`
    )
    const data = await response.json()
    const {sys: {country}, name, main: {temp, temp_max: tempMax, temp_min: tempMin, feels_like: feelsLike, humidity}} = data
    setWeatherData({
      name, temp, tempMax, tempMin, feelsLike, humidity, country
    })
    setExecute(true)
  }, [town])

  // weatherCall only fires if town isn't set to null. Forces user to populate input
  useEffect(() => {
    if (town) {
      weatherCall()

    }
  }, [town, weatherCall])

  return (
    <Layout>
      <div className={`page-container`}>
        <div>
          <h1 className="blog-title">Current Weather App</h1>
          <p style={{ textAlign: "center" }}>
            This is the current weather where you live
          </p>
        </div>
        <div className={`blog-title ${styles.inputDiv}`}>
          <input ref={inputEl} className={styles.inputStyle} type="text" />
          <button
            style={{ marginLeft: "20px" }}
            // Grab the value from inputEl, controlled by a ref.
            onClick={() => setTown(inputEl.current.value)}
          >
            Submit
          </button>
          {/* <p>Town of interest</p> */}

          {execute &&
          (
            <table className={`centered ${styles.tableStyle}`}>
              <tbody>
                <tr>
                  <td>City</td>
                  <td><span className={styles.icons}><BiWorld/></span></td>
                  <td>{weatherData.name} {getUnicodeFlagIcon(`${weatherData.country}`)}</td>
                </tr>
                <tr>
                  <td>Temp</td>
                  <td><span className={styles.icons}><FaTemperatureHigh/></span></td>
                  <td>{weatherData.temp}</td>
                </tr>
                <tr>
                  <td>Lowest Temp</td>
                  <td><span className={styles.icons}><FaChevronDown/></span></td>
                  <td>{weatherData.tempMin}</td>
                </tr>
                <tr>
                  <td>Highest Temp</td>
                  <td><span className={styles.icons}><FaChevronUp/></span></td>

                  <td>{weatherData.tempMax}</td>
                </tr>
                <tr>
                  <td>Feels like</td>
                  <td><span className={styles.icons}><GiThermometerHot/></span></td>

                  <td>{weatherData.feelsLike}</td>
                </tr>
                <tr>
                  <td>Humidity</td>
                  <td><span className={styles.icons}><WiHumidity/></span></td>

                  <td>{weatherData.humidity}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Weather
