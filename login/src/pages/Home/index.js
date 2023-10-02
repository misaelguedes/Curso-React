import {useState} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

export default function Home() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(e) {
        e.preventDefault()

        if (email !== '' && password !== '') {
            alert('Teste')
        } else {
            alert('Preencha todos os campos!')
        }
    }

    return (
        <div className='home-container'>
            <h1>Lista de Tarefas</h1>
            <span>Gerencie sua agenda de forma fácil.</span>

            <form className='form' onSubmit={handleLogin}>
                <input type='text' placeholder='Digite seu e-mail...' autoComplete='false' value={email} onChange={(e) => setEmail(e.target.value)}/>

                <input type='password' placeholder='*****' value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button type='submit'>Acessar</button>
            </form>

            <Link to='/register' className='button-link'>
                Não possui uma conta? Cadastre-se!
            </Link>
        </div>
    )
}