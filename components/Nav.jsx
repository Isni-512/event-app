import { IoIosMenu } from "react-icons/io";
export default function NavBar({ setPage }) {
    return (
        <nav className="flex justify-between items-center h-20 text-white px-4">
            <IoIosMenu className="text-4xl block sm:hidden" />
            <ul className="flex space-x-4 hidden sm:flex">
                    <li>
                    <button
                        onClick={() => setPage("Accueil")}
                        className="cursor-pointer"
                    >
                        Home
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setPage("Jour1")}
                        className="cursor-pointer"
                    >
                        Jour 1
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            setPage("Jour2");
                        }}
                        className="cursor-pointer"
                    >
                        Jour 2
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setPage("Jour3")}
                        className="cursor-pointer"
                    >
                        Jour 3
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setPage("Galerie")}
                        className="cursor-pointer"
                    >
                        Galerie
                    </button>
                </li>
            </ul>
        </nav>
    );
}
