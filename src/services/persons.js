import axios from "axios";

const getAllPersons = () => {
  const request = axios.get(process.env.REACT_APP_GET_PERSONS);
  return request.then(response => response.data);
};

export default { getAllPersons };
