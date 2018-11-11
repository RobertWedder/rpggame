import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import data from '../data/DB/conditions.json';

class ConditionsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { charStates: data, selectedRow: null, showedContent: null };
    this.handleChange = this.handleChange.bind(this);
    this.selectRow = this.selectRow.bind(this);
  }

  handleChange(e) {
    const filteredStates = data.filter(charState =>
      charState.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
      charState.translation.toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({ charStates: filteredStates });
  }

  selectRow(e) {
    const { charStates } = this.state;
    const content = charStates.find(charState => charState.name === e.target.textContent);
    this.setState({ selectedRow: e.target.textContent, showedContent: content });
  }

  render() {
    const { charStates, selectedRow, showedContent } = this.state;
    const { location, history } = this.props;
    const content = showedContent &&
      (
        <div>
          <h2>{showedContent.name}</h2>
          <h3>{`(${showedContent.translation})`}</h3>
          <p>{showedContent.description}</p>
        </div>
      );
    return (
      <div className="menu states">
        <div className="searchlist-container">
          <Input className="search-input" onChange={this.handleChange} placeholder="Search..." />
          <ul>
            {charStates.map(charState => (
              <li key={charState.name} onClick={this.selectRow} className={charState.name === selectedRow ? 'selected' : ''}>
                {charState.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="searchlist-content">{(showedContent && content) || 'Select condition...'}</div>
        <Link
          className="back-button"
          to={location.pathname}
          onClick={() => history.goBack()}
        >
          back
        </Link>
      </div>
    );
  }
}

ConditionsTable.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
};

export default ConditionsTable;
