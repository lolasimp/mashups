import React from 'react';

import PropTypes from 'prop-types';

import './AnimalItem.css';
import { animalShape } from '../../propz/animalProp';

class AnimalItem extends React.Component {
  static propTypes = {
    animal: animalShape,
  }
  render() {
    const { animal } = this.props;
    return (
      <div className="animal-picture">{animal.imgUrl}
      </div>
      <div className="animal-name">{animal.name}
      </div>
      <div>{animal.description}
      </div>
    );
  }
}

export default AnimalItem;
