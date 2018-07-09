import axios from 'axios';
import constants from '../constants';

const getRequest = () => {
  return new Promise ((resolve, reject) => {
    axios
      .get (`${constants.firebaseConfig.databaseURL}/mashups.json`)
      .then ((res) => {
        const mashups = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach((key) => {
            res.data[key].id = key;
            mashups.push(res.data[key]);
          });
        }
        resolve (mashups);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const postRequest = (animal) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/mashups.json`, animal)
      // {
      //   imgUrl: animal.imgUrl,
      //   name: animal.name,
      //   description: animal.description,
      // })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default {getRequest, postRequest};
