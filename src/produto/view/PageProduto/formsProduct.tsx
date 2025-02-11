import { useState } from "react";
import { Produto } from "../../interface/produto";

interface FormEditProdutoProps {
    produto: Produto;
    onClose: () => void;
}

const FormEditProduto = ({ produto, onClose }: FormEditProdutoProps) => {
    const [formData, setFormData] = useState(produto);

    // Manipula mudanças nos inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Simula salvamento
    const handleSave = () => {
        console.log("Produto atualizado:", formData);
        onClose(); // Fecha o modal
    };

    return (
        <form className="flex flex-col space-y-2">
            <label className="text-gray-700">Nome:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded p-2"
            />

            <label className="text-gray-700">Descrição:</label>
            <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="border rounded p-2"
            />

            <label className="text-gray-700">Preço:</label>
            <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="border rounded p-2"
            />

            <label className="text-gray-700">Quantidade:</label>
            <input
                type="number"
                name="quantidade"
                value={formData.quantidade}
                onChange={handleChange}
                className="border rounded p-2"
            />

            <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
                onClick={handleSave}
            >
                Salvar
            </button>
        </form>
    );
};

export default FormEditProduto;
