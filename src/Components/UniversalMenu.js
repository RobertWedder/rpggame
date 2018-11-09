import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const spacer = 'https://res.cloudinary.com/tomy04/image/upload/v1516495000/Forgotten/main-spacer.png';


const UniversalMenu = props => (
  <div className="main_container">
    <div className="menu">
      <ul className="menu_list">
        <img className="menu_list_spacer" src={spacer} alt="spacer" />
        {props.links.map(elem => (
          <div key={elem.label}>
            <li className="menu_list_item">
              <div className="list_item_background" />
              {
                <Link
                  className="list_item_content"
                  to={elem.label === 'back' ? '' : `/${elem.link ? elem.link : elem.label}`}
                  onClick={() => elem.label === 'back' && props.history.goBack()}
                >
                  {elem.label}
                </Link>
              }
            </li>
            <img className="menu_list_spacer" src={spacer} alt="spacer" />
          </div>
            ))}
      </ul>
    </div>
  </div>
);

UniversalMenu.propTypes = {
  links: PropTypes.array.isRequired,
};

export default UniversalMenu;
