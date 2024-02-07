import axios from 'axios'; // Import Axios properly

const url = 'http://localhost:3000/symbol/';

const get_element = symbol => {
  return axios(`${url}${symbol}`).then(res => {
    // console.log(res.data)
    return res.data;
  }).catch(error => {
    console.error('Error fetching element:', error);
      throw error;
  });
};

export default get_element; // Use export default to export the function

