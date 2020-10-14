import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import SignUp from './pages/signup/signup';
import SignIn from './pages/signin/signin';
import Dashboard from './pages/dashboard/dashboard';


const App = () => {

  useEffect(() => {
    hello();
  }, [])

  function hello() {
    fetch("/api/hello")
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
