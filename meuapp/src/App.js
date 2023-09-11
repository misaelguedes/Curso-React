import React, {Component} from "react"

const BemVindo = (props) => {
  return (
    <div>
      <h2>Bem-vindo(a) {props.nome}</h2>
      <h3>Você mora em {props.cidade}, e tem {props.idade} anos.</h3>
    </div>
  )
}

const Equipe = (props) => {
  return (
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
      <Social fb={props.facebook}/>
      <hr/>
    </div>
  )
}

const Sobre =(props) => {
  return (
    <div>
      <h2>Olá, meu nome é {props.nome}</h2>
      <h3>Trabalho como {props.cargo}</h3>
      <h3>Tenho {props.idade} anos</h3>
    </div>
  )
}

const Social = (props) => {
  return (
    <div>
      <a href={props.fb}>Facebook</a>
    </div>
  )
}

class NovaEquipe extends Component {
  render() {
    return (
      <div>
        <h2>Nome: {this.props.nome}! </h2>
        <h3>Profissão: {this.props.cargo}</h3>
        <h3>Idade: {this.props.idade} anos</h3>
      </div>
    )
  }
}

export default function App() {
  return (
    <div>
      Olá Mundo!
      <BemVindo nome='Misael' idade='30' cidade='Barueri'/>
      <BemVindo nome='Jheniffer' idade='24' cidade='Barueri'/>
      <BemVindo nome='Gustavo' idade='23' cidade='Osasco'/>
      <br/>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome='Misael' cargo='Programador' idade='30' facebook='https://www.google.com.br/'/>
      <Equipe nome='Jheniffer' cargo='Recepcionista' idade='24' facebook='https://www.google.com.br/'/>
      <Equipe nome='Gustavo' cargo='Vendedor' idade='23' facebook='https://www.google.com.br/'/>
      <br/>
      <NovaEquipe nome='Raphael Veiga' cargo='Jogador' idade='28'/>
      <hr/>
      <NovaEquipe nome='Weverton' cargo='Goleiro' idade='35'/>
    </div>
  )
}
