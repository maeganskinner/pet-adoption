
import Landing from './components/Landing';
import Nav from './components/Nav';
//import Footer from './components/Footer';
import Header from './components/Header';
import OurShades from './components/OurShades';
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Cart from './components/Cart'



class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Nav/>
              
              <OurShades />
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;




