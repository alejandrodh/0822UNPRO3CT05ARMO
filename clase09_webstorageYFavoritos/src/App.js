import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Personajes from "./screens/Personajes/Personajes";
import UnPersonaje from "./screens/UnPresonaje/UnPersonaje";
import NotFound from "./screens/NotFound/NotFound";

import {Route, Switch} from 'react-router-dom';


function App() {
  

  return (
    <React.Fragment>
      <Navbar />
      <h1>My App in React</h1>
      <main>       
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/aboutus' component={About}/>
          <Route path='/personajes' exact component={Personajes}/>
          <Route path='/personajes/id/:id' component={UnPersonaje}/>
          <Route path='' component={NotFound}/>
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
