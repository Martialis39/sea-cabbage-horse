import React, { useState, useCallback, useEffect } from "react";

import Header from "./components/Header";
import Modal from "./components/Modal";
import PersonItem from "./components/PersonItem";
import { PersonsListStyle, Title } from "./App.style";
// DND
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
// Data
import PersonsService from "./services/persons";
import Pagination from "./components/Pagination";

function App() {
  const [persons, setPersons] = useState(null);

  useEffect(() => {
    if (typeof window !== undefined && persons == null) {
      const store = window.localStorage;
      const personsFromLocalStorage = store.getItem("test_assignment_people");

      if (!personsFromLocalStorage) {
        PersonsService.getAllPersons().then(response => {
          store.setItem(
            "test_assignment_people",
            JSON.stringify(response.data)
          );
          setPersons(response.data);
        });
      } else {
        setPersons(JSON.parse(personsFromLocalStorage));
      }
    }
  }, [persons]);
  const [modalRender, setModalRender] = useState(null);

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = persons[dragIndex];
      const newPersons = persons.slice();
      newPersons.splice(dragIndex, 1);
      newPersons.splice(hoverIndex, 0, dragCard);
      setPersons(newPersons);
    },
    [persons]
  );

  return (
    <main className="App">
      <Header />
      {modalRender && (
        <Modal render={modalRender} setModalRender={setModalRender} />
      )}
      <Title>
        <h2>People's list</h2>
      </Title>
      <DndProvider backend={HTML5Backend}>
        {persons && (
          <PersonsListStyle>
            <Pagination>
              {persons.map((person, index) => {
                return (
                  <PersonItem
                    moveCard={moveCard}
                    key={index}
                    index={index}
                    {...person}
                    setModalRender={setModalRender}
                  />
                );
              })}
            </Pagination>
          </PersonsListStyle>
        )}
      </DndProvider>
    </main>
  );
}

export default App;
