import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const spacer = 'https://res.cloudinary.com/tomy04/image/upload/v1516495000/Forgotten/main-spacer.png';


const UniversalMenu = (props) => {
  const { location, history, links } = props;
  return (
    <div className="menu">
      <ul className="menu_list">
        <img className="menu_list_spacer" src={spacer} alt="spacer" />
        {links.map(elem => (
          <div key={elem.label}>
            <li className="menu_list_item">
              <div className="list_item_background" />
              {
                <Link
                  className="list_item_content"
                  to={elem.label !== 'back' ?
                    `${location.pathname}${elem.link ? elem.link : elem.label}/` :
                    `${location.pathname}`}
                  onClick={() => elem.label === 'back' && history.goBack()}
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
  );
};

UniversalMenu.propTypes = {
  links: PropTypes.array,
  location: PropTypes.object,
  history: PropTypes.object,
};

export default UniversalMenu;
