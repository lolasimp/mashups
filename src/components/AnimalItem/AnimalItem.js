import React from 'react';

// import PropTypes from 'prop-types';

import './AnimalItem.css';
import { animalShape } from '../../propz/animalProp';

class AnimalItem extends React.Component {
  static propTypes = {
    animal: animalShape,
  }
  render () {
    const { animal } = this.props;
    return (
      <div className="card-holder col-sm-4">
        <div className="thumbnail">
          <div className="animal-photo">
            <img src={animal.imgUrl} alt="" />
          </div>
          <div className="caption">
            <h2>{animal.name}</h2>
            <p>{animal.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AnimalItem;
