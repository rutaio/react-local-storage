import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState('');

  const setInfoToLocalStorage = () => {
    // 1 argumentas, Key pavadinimas pagal kuri po to galesim istraukti reiksme
    // 2 argumentas, reiksme kuri bus issaugota
    localStorage.setItem('name', 'Jonas');
  };

  const handleDeleteFormLocalStorage = () => {
    //istrinam viena reiksme:
    localStorage.removeItem('name');
    //istrinam visus duomenis:
    localStorage.clear();
  };

  const getDataFromLocalStorage = () => {
    const name = localStorage.getItem('name');

    if (name) {
      setName(name);
    }
  };

  // useEffect naudojame, kai norim kazka atvaizduoti pirma karta, kai komponentas yra uzkraunamas! (del to rasome tuscia masyva [])
  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  return (
    <>
      <h1>localStorage pamoka</h1>
      <button onClick={setInfoToLocalStorage}>Issaugok i localStorage</button>
      <button onClick={handleDeleteFormLocalStorage}>
        Istrinti viska is localStorage
      </button>
      <button onClick={getDataFromLocalStorage}>
        Gauk duomenis is localStorage
      </button>

      <h2>{`Mano vardas: ${name}`}</h2>
    </>
  );
}

export default App;
