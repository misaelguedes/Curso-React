import React from "react"

const BemVindo = (props) => {
  return (
    <div>
      <h2>Bem-vindo(a) {props.nome}</h2>
      <h3>Você tem {props.idade} anos.</h3>
    </div>
  )
}

export default function App() {
  return (
    <div>
      Olá Mundo!
      <BemVindo nome='Misael' idade='30'/>
      <BemVindo nome='Jheniffer' idade='24'/>
    </div>
  )
}
