import './App.css'
import Modal from './components/Modal'

import { useState } from 'react'

export default function App() {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='container'>
      <h1>Criando Modal</h1>
      <button onClick={() => setOpenModal(true)}>Abrir modal</button>
      {openModal && (
        <Modal closeModal={() => setOpenModal(!openModal)}/>
      )}
    </div>
  )
}