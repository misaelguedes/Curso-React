import { useParams } from "react-router"

export default function Produto() {

    const {id} = useParams()

    return (
        <div>
            <h2>PÁGINA DETALHE DO PRODUTO</h2>
            <span>MEU PRODUTO É {id}</span>
        </div>
    )
}