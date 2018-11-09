import React from 'react';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import sound from '../abc.mp3';
import UniversalMenu from './Components/UniversalMenu';
import './App.scss';

const audio = new Audio(sound);
audio.loop = true;
let run = false;
document.addEventListener('click', () => {
  if (!run) {
    audio.play();
    run = true;
  }
});

const mainLinks = [
  { label: 'new game', link: 'new' }, { label: 'campaigns' }, { label: 'heroes' },
  { label: 'knowledge' }, { label: 'map editor', link: 'map' },
];
const newGameLinks = [
  { label: 'join' }, { label: 'new game', link: 'newGame' }, { label: 'back' },
];
const campaignLinks = [
  { label: 'your campaigns', link: 'yourCampaigns' }, { label: 'your games', link: 'yourGames' },
  { label: 'worldmaking' }, { label: 'database' }, { label: 'back' },
];
const heroesLinks = [
  { label: 'your heroes', link: 'yourHeroes' }, { label: 'campaign heroes', link: 'cmpaignHeroes' },
  { label: 'create a hero', link: 'createHero' }, { label: 'back' },
];
const knowledgeLinks = [
  { label: 'glossary' }, { label: 'back' },
];
const mapLinks = [
  { label: 'new map', link: 'newMap' }, { label: 'new items', link: 'newItems' }, { label: 'back' },
];


class App extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className="container">
        <Router history={browserHistory}>
          <div>
            <Route exact path="/dist" render={() => <UniversalMenu links={mainLinks} />} />
            <Route path="/new" render={props => <UniversalMenu {...props} links={newGameLinks} />} />
            <Route path="/campaigns" render={props => <UniversalMenu {...props} links={campaignLinks} />} />
            <Route path="/heroes" render={props => <UniversalMenu {...props} links={heroesLinks} />} />
            <Route path="/knowledge" render={props => <UniversalMenu {...props} links={knowledgeLinks} />} />
            <Route path="/map" render={props => <UniversalMenu {...props} links={mapLinks} />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
