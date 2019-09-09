import React from "react";
import Header from "./components/Header";

function App() {
  console.log(process.env.REACT_APP_GET_PERSONS);
  return (
    <main className="App">
      <Header />
      Hello world
    </main>
  );
}

export default App;
