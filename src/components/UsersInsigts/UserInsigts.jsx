import './UserInsigts.css'
const UserInsigts = ({data}) => {
    return (
        <div className="userIns">
            <div>
                <p>Farmer's Insights</p>
                <p>weather: {data.weather[0].main}</p>
                <p>Description:{data.weather[0].description}</p>
                <p>Humidity: {data.main.humidity}</p>
            </div>
            <div>
                <p>Event Planner's Forcast</p>
                <p>Hourly Forcast</p>
                <p>08:00 - 18°C - Clear  </p>
                <p> 09:00 - 19°C - Partly Cloudy </p>
                <p>10:00 - 21°C - Sunny   </p>
                <p>Weekly Forcast</p>
                <p>Mon-22-Sunny</p>
                <p>Tue-18-Rainy</p>
                <p>Special Alerts:None</p>
            </div>
            <div>
                <p>Travelers Weather</p>
                <p>Destination:Paris</p>
                <p>Temperature: 18</p>
                <p>Condition:Rainy</p>
                <p>Travel Alerts:None</p>
                <p>Packing Suggestions</p>
                <p>RainCoat</p>
                <p>Umberalla</p>
                <p>WaterProof Glass</p>
            </div>
        </div>
    )
}

export default UserInsigts;