import React from 'react';
import PropTypes from 'prop-types';

import './AnimalForm.css';

const defaultAnimals = {
  imgUrl: '',
  name: '',
  description: '',
};

class AnimalForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    newAnimal: defaultAnimals,
  };

  submitAnimalForm = (e) => {
    const {onSubmit} = this.props;
    const {newAnimal} = this.state;
    e.preventDefault();
    if (
      newAnimal.imgUrl &&
      newAnimal.name &&
      newAnimal.description
    ) {
      onSubmit(this.state.newAnimal);
      this.setState({newAnimal: defaultAnimals});
    } else {
      alert ('Please complete form!');
    }
  };

  inputChange = (name, e) => {
    const tempListing = {...this.state.newAnimal};
    tempListing[name] = e.target.value;
    this.setState({newAnimal: tempListing});
  }

  imageUrlChange = (e) => {
    this.inputChange('imgUrl', e);
  }

  nameChange = (e) => {
    this.inputChange('name', e);
  }

  descriptionChange = (e) => {
    this.inputChange('description', e);
  }

  render () {
    const { newAnimal } = this.state;
    return (
      <div className="MashupForm">
        <h2 className="MashupFormHeader">Mashup Form</h2>

        <form onSubmit={this.submitAnimalForm} className="form-horizontal">
          <div className="form-group">
            <label
              htmlFor="inputImageUrl"
              className="col-sm-2 control-label"
            >
              Image Url
            </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="text"
                id="inputImageUrl"
                placeholder="https://www.imageUrl.com"
                value={newAnimal.imgUrl}
                onChange={this.imageUrlChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label
              htmlFor="inputName"
              className="col-sm-2 control-label"
            >
              Name
            </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="text"
                id="inputName"
                placeholder="Name of Animal"
                value={newAnimal.name}
                onChange={this.nameChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label
              htmlFor="inputDescription"
              className="col-sm-2 control-label"
            >
              Description
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputDescription"
                placeholder="Describe the animal here..."
                value={newAnimal.description}
                onChange={this.descriptionChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button
                type="submit"
                className="btn btn-success"
              >
                Add Mashup
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AnimalForm;
