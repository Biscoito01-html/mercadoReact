import { Produto } from "../../interface/produto";

interface ListCardProps {
    produto: Produto;
    onEdit: (produto: Produto) => void; // Passa o produto para edição
}

const ListCard = ({ produto, onEdit }: ListCardProps) => {
    return (
        <div className="bg-white shadow-lg rounded-2xl p-2 m-1 flex flex-row items-center transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl w-full">
            {/* Imagem do Produto */}
            {produto.image && (
                <img
                    src={produto.image}
                    alt={produto.name}
                    className="w-20 h-20 mr-4 rounded-lg"
                />
            )}

            {/* Informações do Produto */}
            <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">{produto.name}</h3>
                <p className="text-sm text-gray-500">{produto.description}</p>
            </div>

            {/* Preço */}
            <p className="text-sm font-bold text-blue-600 mx-4">R$ {produto.price.toFixed(2)}</p>

            {/* Categoria e Quantidade */}
            <div className="flex space-x-2 mx-4">
                <span className="bg-gray-200 px-2 py-1 rounded-lg text-sm text-gray-600">
                    {produto.categoria}
                </span>
                <span className="bg-green-200 px-2 py-1 rounded-lg text-sm text-gray-600">
                    Qtd: {produto.quantidade}
                </span>
            </div>

            {/* Botão de ação */}
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
                onClick={() => onEdit(produto)} // Chama a função de edição
            >
                Editar
            </button>
        </div>
    );
};

export default ListCard;
