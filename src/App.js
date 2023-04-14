import "./App.css";
import { Card } from "./components/card/Card";
import { Header } from "./components/header/Header";
import { useState } from "react";

const movies = [];
function App() {
  const [newMovie, setNewMovie] = useState(movies);

  function addNewHandler(data) {
    const arr = [...newMovie, data];
    setNewMovie(arr);
  }

  return (
    <div className="App">
      <Header onSubmit={addNewHandler} />
      <Card movie={newMovie} />
    </div>
  );
}

export default App;
