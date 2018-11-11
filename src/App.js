import React from 'react';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sound from '../abc.mp3';
import UniversalMenu from './Components/UniversalMenu';
import ConditionsTable from './Components/ConditionsTable';
import './App.scss';

library.add(faVolumeMute, faVolumeUp);

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
  { label: 'glossary' }, { label: 'conditions' }, { label: 'back' },
];
const mapLinks = [
  { label: 'new map', link: 'newMap' }, { label: 'new items', link: 'newItems' }, { label: 'back' },
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { soundOn: false };
    this.audio = new Audio(sound);
  }

  componentDidMount() {
    this.audio.loop = true;
    let run = false;
    document.addEventListener('click', () => {
      if (!run) {
        this.audio.play();
        this.setState({ soundOn: true });
        run = true;
      }
    });
  }
  render() {
    const { soundOn } = this.state;
    this.audio.volume = this.state.soundOn ? 0.3 : 0;

    return (
      <div className="container">
        <FontAwesomeIcon className="sound" icon={soundOn ? faVolumeUp : faVolumeMute} onClick={() => this.setState({ soundOn: !soundOn })} />
        <Router history={browserHistory}>
          <div className="main_container">
            <Route exact path="/dist" render={props => <UniversalMenu {...props} links={mainLinks} />} />
            <Route exact path="/dist/new" render={props => <UniversalMenu {...props} links={newGameLinks} />} />
            <Route exact path="/dist/campaigns" render={props => <UniversalMenu {...props} links={campaignLinks} />} />
            <Route exact path="/dist/heroes" render={props => <UniversalMenu {...props} links={heroesLinks} />} />
            <Route exact path="/dist/knowledge" render={props => <UniversalMenu {...props} links={knowledgeLinks} />} />
            <Route exact path="/dist/map" render={props => <UniversalMenu {...props} links={mapLinks} />} />
            <Route exact path="/dist/knowledge/conditions" render={props => <ConditionsTable {...props} />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
