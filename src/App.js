// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/component/navbar/home';
import Dashboard from '../src/component/navbar/dashboard';
import Contact from '../src/component/navbar/contact';
import Admin from '../src/component/navbar/admin';
import SignIn from '../src/component/navbar/signin';
import SignUp from '../src/component/navbar/signup';
//import Navbar from '../src/component/navbar/navbar';


const App = () => {
  return (
    <Router>
      <Routes>
    
     
        <Route path={Home} exact component={Home} />
        <Route path={Dashboard} component={Dashboard} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={Admin} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      
      </Routes>
    </Router>
  );
};

export default App;
