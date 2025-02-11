"use client";

import { useState } from "react";
import produtos from "../../../mocks/listProduto";
import ListCard from "./card";
import { Produto } from "../../interface/produto";
import FormEditProduto from "./formsProduct";
// Importa o formulário de edição

const PageProdutos = () => {
    const [isOpen, setIsOpen] = useState(false); // Estado do modal
    const [selectedProduto, setSelectedProduto] = useState<Produto | null>(null); // Produto selecionado
    const [produtoPesquisado, setProdutoPesquisado] = useState("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProdutoPesquisado(event.target.value);
    };

    const produtosFiltrados = produtos.filter((produto) =>
        produto.name.toLowerCase().includes(produtoPesquisado.toLowerCase()) ||
        produto.categoria.toLowerCase().includes(produtoPesquisado.toLowerCase())
    );

    // Abre o modal e define o produto selecionado
    const handleEditClick = (produto: Produto) => {
        setSelectedProduto(produto);
        setIsOpen(true);
    };

    // Fecha o modal
    const closeModal = () => {
        setIsOpen(false);
        setSelectedProduto(null);
    };

    return (
        <div className="flex flex-col items-center">
            <input
                className="w-full  border-2 text-3xl text-gray-900 border-gray-300 rounded-md p-2 mb-2"
                type="text"
                name="name" value={produtoPesquisado}
                onChange={handleSearch}
                placeholder="Pesquisar"
            />

            <section className="flex flex-wrap justify-center m-4">
                {produtosFiltrados.map((produto) => (
                    <ListCard key={produto.id} produto={produto} onEdit={handleEditClick} />
                ))}
            </section>

            {/* Modal de Edição */}
            {isOpen && selectedProduto && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
                            onClick={closeModal}
                        >
                            ✖
                        </button>
                        <h2 className="text-xl font-bold text-gray-700 mb-4">Editar Produto</h2>
                        <FormEditProduto produto={selectedProduto} onClose={closeModal} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PageProdutos;
