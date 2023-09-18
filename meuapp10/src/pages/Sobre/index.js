import {Link} from 'react-router-dom'

export default function Sobre() {
    return (
        <div>
            <h1>Página Sobre a Empresa</h1>
            <br/><br/>
            <Link to='/'>Página Home</Link><br/>
            <Link to='/contato'>Contato</Link>
        </div>
    )
}