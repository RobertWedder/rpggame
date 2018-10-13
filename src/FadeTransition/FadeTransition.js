import React from 'react';
import PropTypes from 'prop-types';
import './FadeTransition.scss';

const FadeTransition = props =>
  (
    <div className={`fadeTransition ${props.fade}`} />
  );

FadeTransition.propTypes = {
  fade: PropTypes.string.isRequired,
};

export default FadeTransition;
