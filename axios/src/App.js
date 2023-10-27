import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css';

function App() {

  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then((res) => {
      setPokemonList(res.data.results)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
      <h1>Request API com Axios</h1>

      <div>
        <h2>Pokemons</h2>
        {pokemonList.map((pokemon) => <div>{pokemon.name}</div>)}
      </div>
    </div>
  );
}

export default App;