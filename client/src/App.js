import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import User from './components/pages/User';
import EarlyAlert from './components/pages/EarlyAlert';
import VacRecs from './components/pages/VacRecords';
import Blog from './components/pages/Blog';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/user' component={User} />
                <Route path='/vacrecs' component={VacRecs} />
                <Route path='/oeas' component={EarlyAlert} />
                <Route path='/blog' component={Blog} />
                <Route path='/about' component={About} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  )
}

//  New automatic <Route> ranking with a new <Routes> API coming soon...             
// <Route path='/' element={<Home />} />
// <Route path='/user' element={<User />} />
// <Route path='/about' element={<About />} />


export default App;
