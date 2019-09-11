import axios from "axios";

const getAllPersons = () => {
  const request = axios.get(process.env.REACT_APP_API_GET_PERSONS);
  return request.then(response => response.data);
};

const deletePersonById = id => {
  const request = axios.delete(
    `${process.env.REACT_APP_API_PERSONS}/${id}/${process.env.REACT_APP_API_TOKEN}`
  );
  return request.then(response => response);
};
export default { getAllPersons, deletePersonById };
