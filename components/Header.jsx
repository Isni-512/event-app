import Link from "next/link";
import NavBar from "./Nav";
import { TbChristmasTreeFilled } from "react-icons/tb";

function Logo() {
  return (
    <Link href="/" aria-label="Accueil">
      <div className="flex items-center gap-2">
        <TbChristmasTreeFilled className="text-green-400 text-2xl" />
        <h1 className="text-xl font-bold">Marché de Noël</h1>
      </div>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="h-20 bg-blue-900 text-white shadow-xl fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Logo />
        <NavBar />
      </div>
    </header>
  );
}
