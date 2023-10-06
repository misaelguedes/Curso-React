import { UserContext } from "../contexts/user"
import {useContext} from 'react'

export default function Nome() {
    const {alunos, setAlunos} = useContext(UserContext)

    return (
        <div>
            <span style={{color: 'red'}}>Bem-vindo: {alunos}</span>
            <br/>
            <button onClick={() => setAlunos('Weverton')}>Troca Nome</button>
        </div>
    )
}