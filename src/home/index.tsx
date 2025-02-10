
import Menu from "../menu";
import "./style.css";

import Card from "../produto/components/card";

const Home = () => {
    return (
        <>
            {/* Menu lateral */}
            <Menu />

            {/* Conteúdo principal */}
            <div className="view">
                <h1 >Home</h1>

                {/* Caixas */}
                <div className="caixa-container">
                    <div className="caixa">
                        <h2>Caixa 1</h2>
                        <p>Conteúdo da caixa 1.</p>
                        <button className="button">Verificar</button>
                    </div>
                    <div className="caixa">
                        <h2>Caixa 2</h2>
                        <p>Conteúdo da caixa 2.</p>
                        <button className="button">Verificar</button>

                    </div>
                </div>

                {/* Cards de Produtos */}
                <div className="list-container">
                    <Card
                        id={1}
                        name="Produto 1"
                        description="Descrição do produto 1"
                        price={10.99}
                        image="https://example.com/produto1.jpg"
                        categoria="Categoria 1"
                        quantidade={5}
                        onClick={() => alert("Produto 1 comprado!")}
                    />
                    <Card
                        id={2}
                        name="Produto 2"
                        description="Descrição do produto 2"
                        price={15.99}
                        image="https://example.com/produto2.jpg"
                        categoria="Categoria 2"
                        quantidade={10}
                        onClick={() => alert("Produto 2 comprado!")}
                    />
                    <Card
                        id={2}
                        name="Produto 2"
                        description="Descrição do produto 2"
                        price={15.99}
                        image="https://example.com/produto2.jpg"
                        categoria="Categoria 2"
                        quantidade={10}
                        onClick={() => alert("Produto 2 comprado!")}
                    />
                    <Card
                        id={2}
                        name="Produto 2"
                        description="Descrição do produto 2"
                        price={15.99}
                        image="https://example.com/produto2.jpg"
                        categoria="Categoria 2"
                        quantidade={10}
                        onClick={() => alert("Produto 2 comprado!")}
                    />
                    <Card
                        id={2}
                        name="Produto 2"
                        description="Descrição do produto 2"
                        price={15.99}
                        image="https://example.com/produto2.jpg"
                        categoria="Categoria 2"
                        quantidade={10}
                        onClick={() => alert("Produto 2 comprado!")}
                    />
                    <Card
                        id={2}
                        name="Produto 2"
                        description="Descrição do produto 2"
                        price={15.99}
                        image="https://example.com/produto2.jpg"
                        categoria="Categoria 2"
                        quantidade={10}
                        onClick={() => alert("Produto 2 comprado!")}
                    />
                </div>

                <h1>Produtos</h1>

            </div>


        </>
    );
};

export default Home;