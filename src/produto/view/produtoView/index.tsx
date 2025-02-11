"use client"; // Adicione esta diretiva para usar hooks e interatividade

import { useState } from "react"; // Importe o hook useState
import { Produto } from "../../interface/produto";

const ProdutoView = (props: Produto) => {
    // Estados para armazenar os valores do formulário
    const [name, setName] = useState(props.name);
    const [description, setDescription] = useState(props.description);
    const [price, setPrice] = useState(props.price);
    const [categoria, setCategoria] = useState(props.categoria);
    const [quantidade, setQuantidade] = useState(props.quantidade);

    // Função para lidar com o envio do formulário
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Cria um objeto com os dados atualizados
        const produtoAtualizado: Produto = {
            id: props.id, // Mantém o ID original
            name,
            description,
            price,
            categoria,
            quantidade,
            image: props.image
        };

        // Aqui você pode adicionar a lógica para enviar os dados atualizados para o backend
        console.log("Produto atualizado:", produtoAtualizado);

        // Exemplo de feedback para o usuário
        alert("Produto atualizado com sucesso!");
    };

    return (
        <div className="flex flex-col p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Editar Produto</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Campo Nome */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nome:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>

                {/* Campo Descrição */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Descrição:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>

                {/* Campo Preço */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Preço:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(parseFloat(e.target.value))}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>

                {/* Campo Categoria */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Categoria:</label>
                    <input
                        type="text"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>

                {/* Campo Quantidade */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Quantidade:</label>
                    <input
                        type="number"
                        value={quantidade}
                        onChange={(e) => setQuantidade(parseInt(e.target.value))}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>

                {/* Botão de Envio */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
                >
                    Salvar Alterações
                </button>
            </form>
        </div>
    );
};

export default ProdutoView;