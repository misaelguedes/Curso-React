import Nome from "../Nome"

import { UserContext } from "../contexts/user"
import {useContext} from 'react'

export default function Alunos() {

    const {qtdAlunos} = useContext(UserContext)

    return (
        <div>
            <h2>Quantidade total de alunos: {qtdAlunos}</h2>
            <Nome/>
        </div>
    )
}