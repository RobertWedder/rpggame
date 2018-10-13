import React from 'react';
import { Link } from 'react-router-dom';
// import './MainPanel.scss';

const spacer = 'https://res.cloudinary.com/tomy04/image/upload/v1516495000/Forgotten/main-spacer.png';

const Sample = () =>
  (
    <div className="main_container">
      <div className="menu">
        <ul className="menu_list">
          <img className="menu_list_spacer" src={spacer} alt="spacer" />
          <li className="menu_list_item">
            <div className="list_item_background" />
            <Link className="list_item_content" to="/dist">linia 1</Link>
          </li>
		  <img className="menu_list_spacer" src={spacer} alt="spacer" />
          <li className="menu_list_item">
            <div className="list_item_background" />
            <Link className="list_item_content" to="/dist">linia 2</Link>
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

export default Sample;
