import { useState, useEffect } from "react";
import "./WeatherData.css";
import axios from "axios";
import Search from "../Search/Search";
import Forcast from "../Daily and Hourly Forcast/Forcast";
import WeatherStories from "../WeatherStories/WeatherStories";
import UserInsigts from "../UsersInsigts/UserInsigts";

const WeatherData = () => {
    const [data, setData] = useState(null);
    const [city, setCity] = useState("London")

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=cdaa18fd93ca3834cf015a2a3461208a&units=metric`);
            setData(response.data);
        };
        getData();
    }, [city]);

    const calculateDewPoint = (temp, humidity) => {
        const a = 17.27;
        const b = 237.7;
        const alpha = ((a * temp) / (b + temp)) + Math.log(humidity / 100);
        const dewPoint = (b * alpha) / (a - alpha);
        return dewPoint.toFixed(2);
    }

    const getLocalTime = (timezone) => {
        const localTime = new Date(Date.now() + timezone * 1000);
        return localTime.toLocaleString();
    }

    if (!data) return null;

    return (
        <div className="Container_Weather">
            <Search setCity={setCity} data={data} />
            <div>
                <div>
                    <div className="Weather">
                        <p>{getLocalTime(data.timezone)}</p>
                        <p>{data.name}, {data.sys.country}</p>
                        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} />
                    </div>
                </div>
                <div className="WeatherData">
                    <div className="WeatherData">
                        <p>Wind {data.wind.speed} m/s</p>
                        <p>Humidity {data.main.humidity}%</p>
                        <p>Feels like {data.main.feels_like}°C</p>
                        <p>Visibility {data.visibility / 1000} km</p>
                        <p>Pressure {data.main.pressure} hPa</p>
                        <p>Dew point {calculateDewPoint(data.main.temp, data.main.humidity)}°C</p>
                    </div>
                </div>
            </div>
            <div>
                <Forcast data= {data} />
                <WeatherStories />
                <UserInsigts data={data} />
            </div>
        </div>
    );
}

export default WeatherData;
