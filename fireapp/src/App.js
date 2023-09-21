import {useState} from 'react'
import { db } from "./firebaseConnection"
import {doc, setDoc, collection, addDoc, getDoc} from 'firebase/firestore'
import './app.css'

export default function App() {
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')

  async function cadastrar() {
  /* Cadastrar com ID específico
  
    await setDoc(doc(db, 'posts', '12345'), {
      Título: titulo,
      Autor: autor
    })
    .then(() => {
      console.log('DADOS REGISTRADOS NO BANCO!')
    })
    .catch((error) => {
      console.log('GEROU ERRO!' + error)
    }) */

  await addDoc(collection(db, 'posts'), {
    Título: titulo,
    Autor: autor
  })
  .then(() => {
    console.log('CADASTRADO COM SUCESSO!')
    setAutor('')
    setTitulo('')
  })
  .catch((error) => {
    console.log('ERRO!' + error)
  })
  }

  async function buscarPost() {
    const postRef = doc(db, 'posts', '12345')

    await getDoc(postRef)
    .then((snapshot) => {
      setAutor(snapshot.data().Autor)
      setTitulo(snapshot.data().Título)
    })
    .catch(() => {
      console.log('ERRO AO BUSCAR!')
    })
  }

  return (
    <div>
      <h1>ReactJS + Firebase</h1>

      <div className='container'>
        <labe>Título:</labe>
        <textarea type='text' placeholder='Digite o título' value={titulo} onChange={(e) => setTitulo(e.target.value)}/>

        <label>Autor:</label>
        <input type='text' placeholder='Autor do post' value={autor} onChange={(e) => setAutor(e.target.value)}/>

        <button onClick={cadastrar}>Cadastrar</button>
        <button onClick={buscarPost}>Buscar post</button>
      </div>
    </div>
  )
}