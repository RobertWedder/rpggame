import React from 'react';
import { Link } from 'react-router-dom';

const spacer = 'https://res.cloudinary.com/tomy04/image/upload/v1516495000/Forgotten/main-spacer.png';
const links = [
  { label: 'new game', link: 'new' },
  { label: 'campaigns' },
  { label: 'heroes' },
  { label: 'knowledge' },
  { label: 'map editor', link: 'map' },
  { label: 'sample' },
];
const MainPanel = () =>
  (
    <div className="main_container">
      <div className="menu">
        <ul className="menu_list">
          <img className="menu_list_spacer" src={spacer} alt="spacer" />
          {links.map(elem => (
            <div>
              <li className="menu_list_item">
                <div className="list_item_background" />
                <Link className="list_item_content" to={`/${elem.link ? elem.link : elem.label}`}>{elem.label}</Link>
              </li>
              <img className="menu_list_spacer" src={spacer} alt="spacer" />
            </div>
            ))}
        </ul>
      </div>
    </div>
  );

export default MainPanel;
