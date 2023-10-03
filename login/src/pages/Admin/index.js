import {useState, useEffect} from 'react'
import './Admin.css'

import {auth, db} from '../../firebaseConnection'
import { signOut } from 'firebase/auth'
import {addDoc, collection, onSnapshot, query, orderBy, where} from 'firebase/firestore'

export default function Admin() {

    const [tarefaInput, setTarefaInput] = useState('')
    const [user, setUser] = useState({})
    const [tarefas, setTarefas] = useState([])

    useEffect(() => {
        async function loadTarefas() {
            const userDetail = localStorage.getItem('@detailUser')
            setUser(JSON.parse(userDetail))

            if (userDetail) {
                const data = JSON.parse(userDetail)
                const tarefaRef = collection(db, 'tarefas')
                const q = query(tarefaRef, orderBy('created', 'desc'), where('userUid', '==', data?.uid))
                const unsub = onSnapshot(q, (snapshot) => {
                    let lista = []

                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
                            tarefa: doc.data().tarefa,
                            userUid: doc.data().userUid
                        })
                    })

                    setTarefas(lista)
                    
                })
            }
        }

        loadTarefas()
    }, [])

    async function handleRegister(e) {
        e.preventDefault()

        if (tarefaInput === '') {
            alert('Digite sua tarefa...')
            return
        }

        await addDoc(collection(db, 'tarefas'), {
            tarefa: tarefaInput,
            created: new Date(),
            userUid: user?.uid
        })
        .then(() => {
            console.log('Tarefa registrada!')
            setTarefaInput('')
        })
        .catch((error) => {
            console.log('Erro ao registrar' + error)
        })
    }

    async function handleLogout() {
        await signOut(auth)
    }

    return (
        <div className='admin-container'>
            <h1>Minhas Tarefas</h1>

            <form className='form' onSubmit={handleRegister}>
                <textarea placeholder='Digite sua tarefa...' value={tarefaInput} onChange={(e) => setTarefaInput(e.target.value)}/>

                <button className='btn-register' type='submit'>Registrar tarefa</button>
            </form>

            <article className='list'>
                <p>....</p>
                <div>
                    <button>Editar</button>
                    <button className='btn-delete'>Concluir</button>
                </div>
            </article>

            <button className='btn-logout' onClick={handleLogout}>Sair</button>
        </div>
    )
}