import { useState } from "react";
import caixasMock from "../mocks/liostde_funcionario";
import produtos from "../mocks/listProduto";
import Card from "../produto/components/card";
import Caixas from "../funcionario/caixas";

const Home = () => {
    // Estados para os termos de pesquisa
    const [termoPesquisaFuncionario, setTermoPesquisaFuncionario] = useState("");
    const [termoPesquisaProduto, setTermoPesquisaProduto] = useState("");

    // Filtra os funcionários com base no termo de pesquisa
    const funcionariosFiltrados = caixasMock.filter((funcionario) =>
        funcionario.name.toLowerCase().includes(termoPesquisaFuncionario.toLowerCase()) ||
        funcionario.matricula.toLowerCase().includes(termoPesquisaFuncionario.toLowerCase())
    );

    // Filtra os produtos com base no termo de pesquisa
    const produtosFiltrados = produtos.filter((produto) =>
        produto.name.toLowerCase().includes(termoPesquisaProduto.toLowerCase()) ||
        produto.categoria.toLowerCase().includes(termoPesquisaProduto.toLowerCase())
    );

    return (
        <div className="container mx-auto min-h-screen flex flex-col p-4">
            <div className="flex justify-center items-center mb-2">
                <h1 className="text-3xl text-gray-600 font-bold">Dashboard</h1>
            </div>

            {/* Seção de Funcionários */}
            <h1 className="text-2xl text-gray-600 font-bold my-2">Funcionários</h1>
            <input
                type="text"
                placeholder="Pesquisar funcionário"
                value={termoPesquisaFuncionario}
                onChange={(e) => setTermoPesquisaFuncionario(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mb-1"
            />
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {funcionariosFiltrados.map((funcionario) => (
                    <Caixas
                        key={funcionario.matricula}
                        matricula={funcionario.matricula}
                        name={funcionario.name}
                        realizarVenda={() => alert(`Venda realizada por ${funcionario.name}`)}
                    />
                ))}
            </section>
            {/* Seção de Produtos */}
            <h1 className="text-2xl text-gray-600 font-bold my-4">Produtos</h1>
            <input
                type="text"
                placeholder="Pesquisar produto"
                value={termoPesquisaProduto}
                onChange={(e) => setTermoPesquisaProduto(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {produtosFiltrados.map((produto) => (
                    <Card
                        key={produto.id}
                        id={produto.id}
                        name={produto.name}
                        description={produto.description}
                        price={produto.price}
                        image={produto.image}
                        categoria={produto.categoria}
                        quantidade={produto.quantidade}
                    // Abre o modal ao clicar
                    />
                ))}
            </section>


        </div>
    );
};

export default Home;