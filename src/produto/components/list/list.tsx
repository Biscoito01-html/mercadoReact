import { Produto } from '../interface/produto';
import "./style.css"

const List = (props: Produto) => {
    return (
        <div className="list">
            <h3>{props.name}</h3>
            <p> {props.description}</p>
            <p>R$ {props.price}</p>
            <p>{props.categoria}</p>
            <p>QTD {props.quantidade}</p>
            <button className='button' onClick={props.onClick}>Comprar</button>

        </div>
    );
}

export default List;