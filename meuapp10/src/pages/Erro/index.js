import { Link } from "react-router-dom"

export default function Erro() {
    return (
        <div>
            <h2>Ops, parece que esta página não existe!</h2><br/>
            <span>Encontramos estas páginas aqui:</span><br/><br/>
            <Link to='/'>Home</Link><br/>
            <Link to='/sobre'>Sobre</Link><br/>
            <Link to='/contato'>Contato</Link>
        </div>
    )
}