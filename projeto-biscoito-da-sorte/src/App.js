import {useState} from 'react'
import Botao from './components/Botao'
import './App.css'

export default function App() {

  const [imagem, setImagem] = useState(require('./assets/biscoito.png'))

  const [textoFrase, setTextoFrase] = useState('')

  const [frases, setFrases] = useState([
    'Siga os bons e aprenda com eles.', 'O riso é a menor distância entre duas pessoas.', 'Deixe de lado as preocupações e seja feliz.', 'Realize o óbvio, pense no improvável e conquiste o impossível.', 'Acredite em milagres, mas não dependa deles.', 'A maior barreira para o sucesso é o medo do fracasso.', 'O bom-senso vale mais do que muito conhecimento.'
  ])

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length)
    let fraseExibida = '" ' + frases[numeroAleatorio] + ' "'
    setTextoFrase(fraseExibida)
    setImagem(require('./assets/biscoito-aberto.png'))
  }

  return (
    <div className='container'>
      <img src={imagem} className='img'/>
      <Botao nome='Abrir biscoito' acaoBtn={quebraBiscoito}/>
      <h3 className='textoFrase'>{textoFrase}</h3>
    </div>
  )
}