import React from 'react';
import {Router, Redirect} from '@reach/router';
import ViewAll from './Views/ViewAll';
import Add from './Views/Add';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ViewAll path ="/players/list"/>
        <Add path = "/players/addplayer"/>
        <Redirect from="/" to="/players/list" noThrow/>
      </Router>
    </div>
  );
}

export default App;
