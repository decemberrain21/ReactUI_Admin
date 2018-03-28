import React, { Component } from 'react';
import Navigation from './components/topNav';
import Heading from './components/headBar';
class App extends Component {
  
  render() {
    return (
     <div>
         
         <Navigation/>
         <Heading/>
     </div>
    );
  }
}

export default App;