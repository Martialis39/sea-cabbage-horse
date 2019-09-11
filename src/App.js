import React, { useState, useCallback, useEffect } from "react";

import Header from "./components/Header";
import Modal from "./components/Modal";
import Pagination from "./components/Pagination";
import PersonItem from "./components/PersonItem";
import Notification from "./components/Notification";
import { StyledPersonsList, StyledTitle, StyledButton } from "./App.style";
// DND
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
// Data
import PersonsService from "./services/persons";
import { CustomFields } from "./constants/index";

function App() {
  const [persons, setPersons] = useState(null);
  const [initialOrder, setInitialOrder] = useState(null);
  const [customOrder, setCustomOrder] = useState(null);
  const [notification, setNotification] = useState(null);

  const compareOrders = () => {
    if (initialOrder && customOrder) {
      const elementsOutOfPlace = initialOrder.reduce(
        (result, currentElement, index) => {
          // Map over customOrder for easy index checking
          const customOrderAsIDs = customOrder.map(e => e.id);
          // Check index is not outside of range
          if (index < customOrderAsIDs.length) {
            // Compare the IDs

            if (currentElement.id !== customOrder[index].id) {
              const elementOutOfPlace = {
                id: currentElement.id,
                // Map over custom order array and check the new index of the out of place element
                newIndex: customOrderAsIDs.indexOf(currentElement.id)
              };
              return result.concat(elementOutOfPlace);
            }
          }
          return result;
        },
        []
      );
      debugger;
      if (elementsOutOfPlace) {
        PersonsService.updatePersonOrder(elementsOutOfPlace);
        setNotification("Order updated");
      }
    }
  };

  useEffect(() => {
    if (persons === null) {
      PersonsService.getAllPersons()
        .then(response => {
          const peopleFromAPI = response.data;
          setInitialOrder(
            peopleFromAPI.map(e => {
              return {
                order: e[CustomFields.order],
                id: e.id
              };
            })
          );
          setPersons(peopleFromAPI);
        })
        .catch(err => {
          setNotification("Unable to fetch persons");
        });
    }
  }, [persons]);
  const [modalRender, setModalRender] = useState(null);

  const deletePerson = id => {
    const newPersons = persons.filter(e => e.id !== id);
    PersonsService.deletePersonById(id)
      .then(res => {
        setNotification("Person deleted");
      })
      .catch(err => {
        setNotification("Something went wrong");
      });
    setPersons(newPersons);
  };
  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = persons[dragIndex];
      const newPersons = persons.slice();
      newPersons.splice(dragIndex, 1);
      newPersons.splice(hoverIndex, 0, dragCard);
      setPersons(newPersons);
      setCustomOrder(
        newPersons.map(e => {
          return {
            order: e[CustomFields.order],
            id: e.id
          };
        })
      );
    },
    [persons]
  );

  return (
    <main className="App">
      {notification && (
        <Notification
          setNotification={setNotification}
          message={notification}
        />
      )}
      {modalRender && (
        <Modal render={modalRender} setModalRender={setModalRender} />
      )}
      <Header />
      <StyledTitle>
        <h2>People's list</h2>
      </StyledTitle>
      <DndProvider backend={HTML5Backend}>
        <StyledButton
          disabled={!customOrder}
          onClick={() => {
            compareOrders();
          }}
        >
          Save custom order
        </StyledButton>

        {persons && (
          <StyledPersonsList>
            <Pagination>
              {persons.map((person, index) => {
                return (
                  <PersonItem
                    moveCard={moveCard}
                    key={person.id}
                    delete={deletePerson}
                    index={index}
                    {...person}
                    setModalRender={setModalRender}
                  />
                );
              })}
            </Pagination>
          </StyledPersonsList>
        )}
      </DndProvider>
    </main>
  );
}

export default App;
