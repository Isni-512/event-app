import Image from "next/image";
import NavBar from "./Nav";
import { TbChristmasTreeFilled } from "react-icons/tb";
export default function Header() {
    return (
        <header className="bg-blue-700 text-white shadow-md">
            <div className="max-w-8xl mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center gap-2"  >
                    <TbChristmasTreeFilled className="green-400" />
                    <h1 className="text-xl font-bold "> Marché de Noël</h1>
                </div>
                <NavBar />
            </div>
        </header>
    );
}
