import Image from "next/image";
import NavBar from "./Nav";
import { TbChristmasTreeFilled } from "react-icons/tb";

function Logo({ changePage }) {
    return (
        <button onClick={() => changePage("Accueil")} className="cursor-pointer">
            <div className="flex items-center gap-2">
                <TbChristmasTreeFilled className="green-400" />
                <h1 className="text-xl font-bold">
                    Marché de Noël
                </h1>
            </div>
        </button>
    );
}

export default function Header({ changePage }) {
    return (
        <header className="bg-blue-900 text-white shadow-xl fixed top-0 left-0 w-full z-50">
            <div className="max-w-8xl mx-auto px-4 flex justify-between items-center">
                <Logo changePage={changePage} />
                <NavBar setPage={changePage} />
            </div>
        </header>
    );
}
