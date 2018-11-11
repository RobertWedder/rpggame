import React from 'react';
import { Input } from 'semantic-ui-react';

const data = [
  { name: 'stunned', description: 'you are tunned', translation: 'oszołomiony' },
  { name: 'dead', description: 'you are dead', translation: 'martwy' },
  { name: 'flatfooted', description: 'you are flatfooted', translation: 'nieprzygotowany' },
  { name: 'stable', description: 'you are stable', translation: 'stabilny' },
];

class StatesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { charStates: data, selectedRow: null, showedContent: null };
    this.handleChange = this.handleChange.bind(this);
    this.selectRow = this.selectRow.bind(this);
  }

  handleChange(e) {
    const filteredStates = data.filter(charState =>
      charState.name.includes(e.target.value) || charState.translation.includes(e.target.value));
    this.setState({ charStates: filteredStates });
  }

  selectRow(e) {
    const { charStates } = this.state;
    const content = charStates.find(charState => charState.name === e.target.textContent);
    this.setState({ selectedRow: e.target.textContent, showedContent: content.description });
  }

  render() {
    const { charStates, selectedRow, showedContent } = this.state;
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
        <div className="searchlist-content">{showedContent || 'Select state...'}</div>
      </div>
    );
  }
}

// StatesTable.propTypes = {
//   links: PropTypes.array.isRequired,
//   location: PropTypes.object.isRequired,
// };

export default StatesTable;
