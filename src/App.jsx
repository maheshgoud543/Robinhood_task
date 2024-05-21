import "./App.css"
import Search from "./components/Search/Search";
import WeatherData from "./components/WeatherData/WeatherData";
import Forcast from "./components/Daily and Hourly Forcast/Forcast";
import WeatherStories from "./components/WeatherStories/WeatherStories";
import UserInsigts from "./components/UsersInsigts/UserInsigts";
function App(){
  return(
    <div>
      {/* <Search /> */}
      <WeatherData />
      {/* <Forcast /> */}
      {/* <WeatherStories />
      <UserInsigts /> */}
    </div>
  )
}
export default App;