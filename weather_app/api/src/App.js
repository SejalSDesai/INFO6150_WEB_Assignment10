import React from "react";
// import { Dimensions, Stylesheet, ScrollView, ImageBackground, View} from "react-native";
import Weather from "./components/weather";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div style={{
        backgroundImage: `url("https://www.designbolts.com/wp-content/uploads/2021/01/blue-sky-with-less-clouds-background-1.jpg")`, width:'100%', height:'100%',
      }} className="AppBody">
        <h1 style={{fontSize: '40px',
    color: 'black', textAlign:'center'}} className="WeatherForecastMainHeading">WEATHER APP</h1>
      <Router>
        <div className="wrapper">
          <Link to='/weekly'><button style={{marginTop: '50px', marginBottom: '50px',}}>Search By Location</button></Link>
              </div>
              <div className="row">
                <Routes>
                {/* <Route path="/weekly" element={Weather} /> */}
                <Route path="/weekly" element={<Weather/>} />
                </Routes>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
