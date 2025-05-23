import { IoIosMenu } from "react-icons/io";
export default function NavBar() {
    return (
        <nav className="flex justify-between items-center h-20 text-white px-4">
            <IoIosMenu className="text-4xl block sm:hidden" />
            <ul className="flex space-x-4 hidden sm:flex">
                <li>Accueil</li>
                <li>Activités</li>
                <li>Galeries</li>
                <li>À propos</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}
