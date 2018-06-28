import React, { Component } from 'react';
import './App.css';
import Animals from '../components/Animals/Animals';
import AnimalForm from '../components/AnimalForm/AnimalForm';

import connection from '../firebaseRequests/connection';
import mashupRequests from '../firebaseRequests/animals';

class App extends Component {
  state = {
    animals: [],
  }
  componentDidMount () {
    connection();
    mashupRequests.getRequest()
      .then((animals) => {
        this.setState({animals});
      })
      .catch((err) => {
        console.error('error with animals GET', err);
      });
  }
  render () {
    return (
      <div className="App">
        <div className="col-sm-6">
          <Animals animals= {this.state.animals}/>
        </div>
        <div className="col-sm-6">
          <AnimalForm />
        </div>
      </div>
    );
  }
}

export default App;
