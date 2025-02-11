import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react"; // Ícones para o menu

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const menuItems = [
        { name: "Dashboard", link: "/" },
        { name: "Produto", link: "/produto" },
        { name: "Categoria", link: "/categoria" },
        { name: "Validade", link: "/validade" },
        { name: "Funcionario", link: "/funcionario" },
    ];

    return (
        <nav className="bg-blue-500 text-white p-4">
            {/* Botão de menu (mobile) */}
            <div className="flex justify-between items-center md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    {menuOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
                </button>
            </div>

            {/* Menu Principal */}
            <ul className={`md:flex md:space-x-3 w-full md:w-auto transition-all duration-300 
                ${menuOpen ? "flex flex-col space-y-3 mt-3" : "hidden md:flex"}`}>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link
                            className="block bg-white text-blue-500 hover:bg-blue-600 hover:text-white 
                                font-bold py-2 px-4 rounded transition duration-300 text-center"
                            to={item.link}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
