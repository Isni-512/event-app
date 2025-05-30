import { useState } from "react";
import { IoIosMenu } from "react-icons/io";

export default function NavBar({ setPage }) {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (page) => {
        setPage(page);
        setMenuOpen(false);
    };

    return (
        <nav className="flex justify-between items-center h-20 text-white px-4">
            <div className="flex justify-between items-center h-20">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="sm:hidden text-4xl cursor-pointer"
                >
                    <IoIosMenu />
                </button>

                <ul className="hidden sm:flex space-x-4">
                    <li><button  className="cursor-pointer" onClick={() => handleClick("Accueil")}>Home</button></li>
                    <li><button  className="cursor-pointer" onClick={() => handleClick("Jour1")}>Jour 1</button></li>
                    <li><button  className="cursor-pointer" onClick={() => handleClick("Jour2")}>Jour 2</button></li>
                    <li><button  className="cursor-pointer" onClick={() => handleClick("Jour3")}>Jour 3</button></li>
                    <li><button  className="cursor-pointer" onClick={() => handleClick("Galerie")}>Galerie</button></li>
                </ul>
            </div>

            {menuOpen && (
                <ul className="sm:hidden bg-blue-900 rounded-b-xl py-4 space-y-2 absolute top-20 left-0 w-full z-40 shadow-lg">
                    <li><button onClick={() => handleClick("Accueil")} className="block w-full text-left px-4 cursor-pointer">Home</button></li>
                    <li><button onClick={() => handleClick("Jour1")} className="block w-full text-left px-4 cursor-pointer">Jour 1</button></li>
                    <li><button onClick={() => handleClick("Jour2")} className="block w-full text-left px-4 cursor-pointer">Jour 2</button></li>
                    <li><button onClick={() => handleClick("Jour3")} className="block w-full text-left px-4 cursor-pointer">Jour 3</button></li>
                    <li><button onClick={() => handleClick("Galerie")} className="block w-full text-left px-4 cursor-pointer">Galerie</button></li>
                </ul>
            )}
        </nav>
    );
}
