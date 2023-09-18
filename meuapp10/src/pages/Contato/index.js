import {Link} from 'react-router-dom'

export default function Contato() {
    return (
        <div>
            <h1>Contato</h1>
            <br/><br/>
            <Link to='/'>Página Home</Link><br/>
            <Link to='/sobre'>Página Sobre</Link>
        </div>
    )
}