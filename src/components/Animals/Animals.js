import React from 'react';
import PropTypes from 'prop-types';

import './Animals.css';

import {animalShape} from '../../propz/animalProp';

class Animals extends React.Component {
  static propTypes = {
    animals: PropTypes.arrayOf(animalShape),
  }
  render () {
    const {animals} = this.props;
    const animalItemComponents = animals.map((animal) => {
      return (
        <li key={animal.id}>{animal.name}</li>
      );
    });
    return (
      <div className="Animals">
        <h2>Animals</h2>
        <ul>
          {animalItemComponents}
        </ul>
      </div>
    );
  }
}

export default Animals;
