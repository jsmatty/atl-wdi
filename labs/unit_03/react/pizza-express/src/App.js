import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SplashImage from './components/SplashImage';
import Description from './components/Description';
import MenuList from './components/MenuList';
import LocationList from './components/LocationList';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <SplashImage />
        <Description />
        <MenuList />
        <LocationList />
        <Contact /> 
      </div>
    );
  }
}  


export default App;
