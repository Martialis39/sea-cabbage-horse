import React, { useState } from "react";
import { useAllPersons } from "./hooks/persons";
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconOrganization from "./assets/IconOrganization";
import PersonItem from "./components/PersonItem";
import Test from "./components/Test";
import { PersonsList, Title } from "./App.style";

function App() {
  let persons = useAllPersons();
  const [modalRender, setModalRender] = useState(null);
  console.log("modalRender is ", modalRender);

  return <Test />;
  return (
    <main className="App">
      <Header />
      {modalRender && (
        <Modal render={modalRender} setModalRender={setModalRender} />
      )}
      <Title>
        <h2>People's list</h2>
      </Title>
      {persons && (
        <PersonsList>
          {persons.map((person, index) => {
            return (
              <PersonItem
                key={index}
                {...person}
                setModalRender={setModalRender}
              />
            );
          })}
        </PersonsList>
      )}
    </main>
  );
}

export default App;
