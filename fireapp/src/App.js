import {useState, useEffect} from 'react'
import { db, auth } from "./firebaseConnection"
import {doc, setDoc, collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, onSnapshot} from 'firebase/firestore'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import './app.css'

export default function App() {
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')

  const [posts, setPosts] = useState([])
  const [idPost, setIdPost] = useState('')

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  useEffect(() => {
    async function loadPosts() {
      const unsub = onSnapshot(collection(db, 'posts'), (snapshot) => {
        const listaPost = []

        snapshot.forEach((doc) => {
          listaPost.push({
            id: doc.id,
            titulo: doc.data().Título,
            autor: doc.data().Autor
          })
        })

        setPosts(listaPost)
      })
    }
    loadPosts()
  },[])

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

    /* const postRef = doc(db, 'posts', 'WxJwjzWDMWxoFpRW1pUo')

    await getDoc(postRef)
    .then((snapshot) => {
      setAutor(snapshot.data().Autor)
      setTitulo(snapshot.data().Título)
    })
    .catch(() => {
      console.log('ERRO AO BUSCAR!')
    }) */

    const postsRef = collection(db, 'posts')
    await getDocs(postsRef)
    .then((snapshot) => {
      let lista = []

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          titulo: doc.data().Título,
          autor: doc.data().Autor
        })
      })

      setPosts(lista)

    })
    .catch((error) => {
      console.log('ERRO AO BUSCAR!')
    })
  }

  async function editarPost() {
    const docRef = doc(db, 'posts', idPost)
    await updateDoc(docRef, {
      Título: titulo,
      Autor: autor
    })
    .then(() => {
      console.log("POST ATUALIZADOS COM SUCESSO!")
      setIdPost('')
      setTitulo('')
      setAutor('')
    })
    .catch((error) => {
      console.log("ERRO AO ATUALIZAR O POST!" + error)
    })
  }

  async function excluirPost(id) {
    const docRef = doc(db, 'posts', id)
    await deleteDoc(docRef)
    .then(() => {
      alert('POST DELETADO COM SUCESSO!')
    })
    .catch((error) => {
      alert('ERRO AO DELETAR POST!' + error)
    })
  }

  async function novoUsuario() {
    await createUserWithEmailAndPassword(auth, email, senha)
    .then(() => {
      console.log('Usuário cadastrado com sucesso!')
      setEmail('')
      setSenha('')
    })
    .catch((error) => {
      if (error.code === 'auth/weak-password') {
        console.log('Senha muito fraca!')
      } else if (error.code === 'auth/email-already-in-use') {
        alert('Este e-mail já existe!')
      }
    })
  }

  return (
    <div>
      <h1>ReactJS + Firebase</h1>

      <div className='container'>
        <h2>Usuários</h2>

        <label>E-mail:</label>
        <input type='email' value={email} placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)}/><br/>

        <label>Senha:</label>
        <input type='password' value={senha} placeholder='Digite sua senha' onChange={(e) => setSenha(e.target.value)}/><br/>

        <button onClick={novoUsuario}>Cadastrar</button> <br/>
      </div> <br/>

      <hr/> <br/>

      <div className='container'>
        <h2>Posts</h2>

        <label>ID do Post:</label>
        <input placeholder='Digite o ID do post' value={idPost} onChange={(e) => setIdPost(e.target.value)}/> <br/>
        <labe>Título:</labe>
        <textarea type='text' placeholder='Digite o título' value={titulo} onChange={(e) => setTitulo(e.target.value)}/><br/>

        <label>Autor:</label>
        <input type='text' placeholder='Autor do post' value={autor} onChange={(e) => setAutor(e.target.value)}/><br/>

        <button onClick={cadastrar}>Cadastrar</button><br/>
        <button onClick={buscarPost}>Buscar post</button><br/>

        <button onClick={editarPost}>Atualizar post</button>

        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <strong>ID: {post.id}</strong><br/>
                <span>Título: {post.titulo}</span> <br/>
                <span>Autor: {post.autor}</span> <br/>
                <button onClick={() => excluirPost(post.id)}>Excluir</button><br/><br/>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}