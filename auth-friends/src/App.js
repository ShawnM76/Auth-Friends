import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/utility/PrivateRoute';
import GetFriends from './components/friends/GetFriends';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoute exact path='/friends' component={GetFriends} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
