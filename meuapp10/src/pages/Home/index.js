import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Bem-vindo à página Home</h1>
            <br/><br/>
            <Link to='/sobre'>Página Sobre</Link><br/>
            <Link to='/contato'>Contato</Link><br/>

            <hr/><br/>

            <Link to='/produto/12345'>Acessar o produto 12345</Link>
        </div>
    )
}