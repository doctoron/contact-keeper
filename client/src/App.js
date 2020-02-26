import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import User from './components/pages/User';
import EarlyAlert from './components/pages/EarlyAlert';
import VacRecs from './components/pages/VacRecords';

import ContactState from './context/contact/ContactState';
import './App.css';

const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              {/* New automatic <Route> rankin with a new <Routes> API coming soon             
            <Route path='/' element={<Home />} />
            <Route path='/user' element={<User />} />
            <Route path='/about' element={<About />} />
          */}
              <Route exact path='/' component={Home} />
              <Route path='/user' component={User} />
              <Route path='/vacrecs' component={VacRecs} />
              <Route path='/oeas' component={EarlyAlert} />
              <Route path='/about' component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  )
}

export default App;
