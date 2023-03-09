import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState } from "react";
import style from "./App.module.css";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "2d0fd52418f5.d3d6077a3b4c1857914f";

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
          // setCharacters([...characters, data]);
        } else {
          alert("Algo salió mal");
        }
      });
  };

  const onClose = (id) => {
    // porque filter.... no modifica el array original
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div className={style.nav}>
        <Nav onSearch={onSearch} />
      </div>
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;
