import { useCallback, useState } from "react";
import { IoIosMenu } from "react-icons/io";

const navItems = [
    { page: "Accueil", label: "Home" },
    { page: "Jour1", label: "Jour 1" },
    { page: "Jour2", label: "Jour 2" },
    { page: "Jour3", label: "Jour 3" },
    { page: "Galerie", label: "Galerie" },
];

function DesktopNav({ items, handleClick }) {
    return (
        <ul className="hidden sm:flex space-x-4">
            {items.map(({ page, label }) => (
                <li key={page}>
                    <button className="cursor-pointer" onClick={() => handleClick(page)}>
                        {label}
                    </button>
                </li>
            ))}
        </ul>
    );
}

function MobileNav({ items, handleClick }) {
    return (
        <ul className="sm:hidden bg-blue-900 rounded-b-xl py-4 space-y-2 absolute top-20 left-0 w-full z-40 shadow-lg">
            {items.map(({ page, label }) => (
                <li key={page}>
                    <button
                        onClick={() => handleClick(page)}
                        className="block w-full text-left px-4 cursor-pointer"
                    >
                        {label}
                    </button>
                </li>
            ))}
        </ul>
    );
}

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
                <DesktopNav items={navItems} handleClick={handleClick} />
            </div>
            {menuOpen && <MobileNav items={navItems} handleClick={handleClick} />}
        </nav>
    );
}
