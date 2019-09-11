import React, { useState, useCallback, useEffect } from "react";

import Header from "./components/Header";
import Modal from "./components/Modal";
import PersonItem from "./components/PersonItem";
import { StyledPersonsList, Title } from "./App.style";
// DND
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
// Data
import PersonsService from "./services/persons";
import Pagination from "./components/Pagination";

function App() {
  const [persons, setPersons] = useState(null);

  useEffect(() => {
    if (persons === null) {
      PersonsService.getAllPersons().then(response => {
        setPersons(response.data);
      });
    }
  }, [persons]);
  const [modalRender, setModalRender] = useState(null);

  const deletePerson = id => {
    debugger;
    const newPersons = persons.filter(e => e.id !== id);
    PersonsService.deletePersonById(id).then(console.log);
    setPersons(newPersons);
  };
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
      {modalRender && (
        <Modal render={modalRender} setModalRender={setModalRender} />
      )}
      <Header />
      <Title>
        <h2>People's list</h2>
      </Title>
      <DndProvider backend={HTML5Backend}>
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
