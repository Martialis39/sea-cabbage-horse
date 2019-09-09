import { useState, useEffect } from "react";
import PersonsService from "../services/persons";

export const useAllPersons = () => {
  const [persons, setPersons] = useState(null);

  useEffect(() => {
    if (typeof window !== undefined) {
      const store = window.localStorage;
      if (!store.getItem("test_assignment_people")) {
        PersonsService.getAllPersons().then(response => {
          setPersons(response.data);
          store.setItem(
            "test_assignment_people",
            JSON.stringify(response.data)
          );
        });
      } else {
        const personsFromLocalStorage = JSON.parse(
          store.getItem("test_assignment_people")
        );
        setPersons(personsFromLocalStorage);
      }
    }
  }, []);
  return persons;
};
