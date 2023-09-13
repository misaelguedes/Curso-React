export default function Botao(props) {
    return (
        <div>
            <button onClick={props.acaoBtn}>{props.nome}</button>
        </div>
    )
}