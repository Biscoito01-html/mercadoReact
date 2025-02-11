import { Produto } from "../../interface/produto";

const Card = (props: Produto) => {
    return (
        <div className="bg-white shadow-lg rounded-2xl p-4 m-2 flex flex-col justify-between items-center 
            transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl w-full max-w-xs">
            {/* Imagem do Produto */}
            {props.image && (
                <img
                    src={props.image}
                    alt={props.name}
                    className="w-30 h-40 object-cover rounded-lg mb-3"
                />
            )}
            {/* Informações do Produto */}
            <h3 className="text-lg font-semibold text-gray-800">{props.name}</h3>
            <p className="text-sm text-gray-500 text-center">{props.description}</p>

            {/* Preço */}
            <p className="text-xl font-bold text-blue-600 my-2">R$ {props.price.toFixed(2)}</p>

            {/* Categoria e Quantidade */}
            <div className="flex justify-between w-full px-2 text-sm text-gray-600">
                <span className="bg-gray-200 px-2 py-1 rounded-lg">{props.categoria}</span>
                <span className="bg-green-200 px-2 py-1 rounded-lg">Qtd: {props.quantidade}</span>
            </div>

        </div>
    );
};

export default Card;
