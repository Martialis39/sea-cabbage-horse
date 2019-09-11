import axios from "axios";
import { CustomFields } from "../constants";

const getAllPersons = () => {
  const personsInOrder = `${process.env.REACT_APP_API_PERSONS}?start=0&sort=${CustomFields.order}&api_token=${process.env.REACT_APP_API_TOKEN}`;
  const request = axios.get(personsInOrder);
  return request.then(response => response.data);
};

const deletePersonById = id => {
  const request = axios.delete(
    `${process.env.REACT_APP_API_PERSONS}/${id}?api_token=${process.env.REACT_APP_API_TOKEN}`
  );
  return request;
};

const updatePersonOrder = arrayOfIdsAndOrders => {
  arrayOfIdsAndOrders.forEach(person => {
    axios.put(
      `${process.env.REACT_APP_API_PERSONS}/${person.id}?api_token=${process.env.REACT_APP_API_TOKEN}`,
      {
        [CustomFields.order]: person.newIndex
      }
    );
  });
};

export default { getAllPersons, deletePersonById, updatePersonOrder };
