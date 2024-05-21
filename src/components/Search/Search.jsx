import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';
import "./Search.css";

const Search = ({ setCity, data }) => {
    const [search, setSearch] = useState("");
    const [unit, setUnit] = useState("Celsius");

    const handleSearch = () => {
        if (search) {
            setCity(search);
        }
        setSearch("");
    }

    const handleUnitChange = (e) => {
        setUnit(e.target.value);
    }

    const celsiusToFahrenheit = (celsius) => {
        return (celsius * 9 / 5) + 32;
    }

    return (
        <div className='Container'>
            <div className='Input_Data'>
                <input type='text' placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />
                <SearchIcon className='Icons' onClick={handleSearch} />
                <LocationOnIcon className='Icons' />
            </div>

            <div className='Location_Data'>
                <p>{data.name}</p>
                <img src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/Haze.svg" alt="Weather icon" />
                <p>{unit === "Celsius" ? data.main.temp : celsiusToFahrenheit(data.main.temp)}{unit === "Celsius" ? "°C" : "°F"}</p>
            </div>

            <div className='Units_Data'>
                <select value={unit} onChange={handleUnitChange}>
                    <option value="Celsius">°C</option>
                    <option value="Fahrenheit">°F</option>
                </select>
            </div>
        </div>
    );
}

export default Search;
