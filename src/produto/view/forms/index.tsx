// pages/AdicionarProdutos.js
import { useState } from "react";
import "./styled.css"

const AdicionarProdutos = () => {
    const [produto, setProduto] = useState({
        nome: "",
        descricao: "",
        preco: "",
        imagem: "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Produto adicionado:", produto);
        // Aqui você pode adicionar a lógica para salvar o produto
    };

    return (
        <div className="page">

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={produto.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Descrição:</label>
                    <input
                        type="text"
                        name="descricao"
                        value={produto.descricao}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Preço:</label>
                    <input
                        type="number"
                        name="preco"
                        value={produto.preco}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Imagem (URL):</label>
                    <input
                        type="text"
                        name="imagem"
                        value={produto.imagem}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    );
};

export default AdicionarProdutos;