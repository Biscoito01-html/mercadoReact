import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    return (
        <>
            {/* Botão para abrir/fechar o menu */}
            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? "X" : "☰"}
            </button>

            {/* Menu lateral */}
            <div className={`dashboard ${isMenuOpen ? "open" : "closed"}`}>
                <div className="space"></div>
                <ul>
                    {[
                        { name: "Home", link: "/" },
                        { name: "Produto", link: "/produto" },
                        { name: "Categoria", link: "/categoria" },
                        { name: "Validade", link: "/validade" },
                        { name: "Funcionario", link: "/funcionario" },
                    ].map((item, index) => (
                        <li key={index}>
                            <Link className="link" to={item.link}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Menu;