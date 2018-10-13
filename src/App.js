//site import list

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPanel from './Panels/MainPanel';
import NewGame from './Panels/NewGame';
  import JoinToCampaingn from './Panels/NewGame/JoinToCampaingn';
  import StartGame from './Panels/NewGame/StartGame';
import Campaigns from './Panels/Campaigns';
import Heroes from './Panels/Heroes';
import Knowledge from './Panels/Knowledge';
import MapEditor from './Panels/MapEditor';
import Sample from './Panels/sample';



import './App.scss';

class App extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Route exact path="/dist" component={MainPanel} />
            <Route path="/new" component={NewGame} />
            <Route path="/campaigns" component={Campaigns} />
            <Route path="/heroes" component={Heroes} />
            <Route path="/knowledge" component={Knowledge} />
            <Route path="/map" component={MapEditor} />
            <Route path="/sample" component={Sample} />
			<Route path="/JoinToCampaingn" component={JoinToCampaingn} />
			<Route path="/StartGame" component={StartGame} />
		  </div>
        </Router>
      </div>
    );
  }
}

export default App;
