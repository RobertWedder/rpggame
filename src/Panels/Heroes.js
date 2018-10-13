import React from 'react';
import { Link } from 'react-router-dom';

const spacer = 'https://res.cloudinary.com/tomy04/image/upload/v1516495000/Forgotten/main-spacer.png';

const Heroes = () =>
  (
    <div className="main_container">
      <div className="menu">
        <ul className="menu_list">
          <img className="menu_list_spacer" src={spacer} alt="spacer" />
          <li className="menu_list_item">
            <div className="list_item_background" />
            <Link className="list_item_content" to="/dist">twoi bohaterowie</Link>
          </li>
		  <img className="menu_list_spacer" src={spacer} alt="spacer" />
          <li className="menu_list_item">
            <div className="list_item_background" />
            <Link className="list_item_content" to="/dist">bohaterowie kampanii</Link>
          </li>
          <img className="menu_list_spacer" src={spacer} alt="spacer" />
          <li className="menu_list_item">
            <div className="list_item_background" />
            <Link className="list_item_content" to="/dist">stwórz bohatera</Link>
          </li>
          <img className="menu_list_spacer" src={spacer} alt="spacer" />
          <li className="menu_list_item">
            <div className="list_item_background" />
            <Link className="list_item_content" to="/dist">zapisani bohaterowie</Link>
          </li>
		  <img className="menu_list_spacer" src={spacer} alt="spacer" />
          <li className="menu_list_item">
            <div className="list_item_background" />
            <Link className="list_item_content" to="/dist">powrót</Link>
          </li>
		</ul>
      </div>
    </div>
  );

export default Heroes;
