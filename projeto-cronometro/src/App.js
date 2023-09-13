import {useState} from 'react'
import './style.css'

export default function App() {

  const [numero, setNumero] = useState(0)
  const [timer, setTimer] = useState(null)
  const [botao, setBotao] = useState('COMEÇAR')

  function vai() {
    if (timer) {
      clearInterval(timer)
      setTimer(null)
      setBotao('CONTINUAR')
  } else {
    const intervalId = setInterval(() => {
      setNumero((prevNumero) => prevNumero + 0.1);
    }, 100);
    setTimer(intervalId);
    setBotao('PAUSAR')
  }
  }

  function zerar() {
    if (timer) {
      clearInterval(timer)
      setTimer(null)
    }
    setNumero(0)
    setBotao('COMEÇAR')
  }

  return (
    <div className='container'>
      <img className='img' src={require('./assets/cronometro.png')}/>
      <a className='timer'>{numero.toFixed(1)}</a>
      <div className='areaBtn'>
        <a className='botao' onClick={vai}>{botao}</a>
        <a className='botao' onClick={zerar}>ZERAR</a>
      </div>
    </div>
  )
}