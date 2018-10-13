import React from 'react';
import { Link } from 'react-router-dom';

const spacer = 'https://res.cloudinary.com/tomy04/image/upload/v1516495000/Forgotten/main-spacer.png';

const NewGame = () =>
  (
    <div className="main_container">
      <div className="menu">
        <ul className="menu_list">
          <img className="menu_list_spacer" src={spacer} alt="spacer" />
          <li className="menu_list_item">
            <div className="list_item_background" />
            <Link className="list_item_content" to="/JoinToCampaingn">dolacz do kampanii</Link>
          </li>
		  <img className="menu_list_spacer" src={spacer} alt="spacer" />
          <li className="menu_list_item">
            <div className="list_item_background" />
            <Link className="list_item_content" to="/StartGame">nowa gra</Link>
          </li>
          <img className="menu_list_spacer" src={spacer} alt="spacer" />
          <li className="menu_list_item">
            <div className="list_item_background" />
            <Link className="list_item_content" to="/dist">powrót</Link>
          </li>
          <img className="menu_list_spacer" src={spacer} alt="spacer" />
		</ul>
      </div>
    </div>
  );

export default NewGame;
