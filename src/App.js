import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import characters from "./data.js";
import style from "./App.module.css";

console.log("Esto es una modificación");

function App() {
  return (
    <div className="App" style={{ padding: "25px" }}>
      <div className={style.nav}>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
      <div>
        <Cards characters={characters} />
      </div>
    </div>
  );
}

export default App;
