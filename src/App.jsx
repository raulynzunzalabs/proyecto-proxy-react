import { useState } from "react";
import './App.css';
import { useEffect } from "react";
import { useRef } from "react";
import { ListItem } from "./components/ListItem";

const Principal = () => {

  const [contador, setContador] = useState(0)
  const [pokemon, setPokemon] = useState([])
  const contenedor = useRef()

  useEffect(() => {
    const petition = async () => {
      const data = await (await fetch("https://pokeapi.co/api/v2/pokemon?limit=10")).json()
      setPokemon(data.results)
    }
    petition()
  }, [])

  const funcion = () => {
    setContador(prev => (
      prev + 1
    ))
    contenedor.current.style.backgroundColor = "red"

  }

  return (
    <main className="main">
      <div className="contador-principal" id="identificador" ref={contenedor}>
        <span>{contador}</span>
        <button onClick={funcion}>+1</button>
        <ul>
          {
            pokemon.map(value => (
              <ListItem name={value.name} key={value.name} />
            ))
          }
        </ul>
      </div>
    </main>
  )
}

export default Principal;