import { Produto } from "../interface/produto"
import "./styles.css"

const Card = (props: Produto) => {
    return (
        <div className="card">
            <h4>Vencendo ou com baixo estoque</h4>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p> R$ {props.price}</p>
            <p>{props.image}</p>
            <p>{props.categoria}</p>
            <p>{props.quantidade}</p>

            <button className='button' onClick={props.onClick}>Atualizar</button>
        </div>)
}

export default Card;