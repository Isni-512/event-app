import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";

const navItems = [
  { page: "", label: "Accueil" },
  { page: "jour1", label: "Jour 1" },
  { page: "jour2", label: "Jour 2" },
  { page: "jour3", label: "Jour 3" },
  { page: "galerie", label: "Galerie" },
  { page: "contact", label: "Contact" },
];

function DesktopNav({ items }) {
  return (
    <ul className="hidden sm:flex space-x-4">
      {items.map(({ page, label }) => (
        <li key={page}>
          <Link href={`/${page}`}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function MobileNav({ items, closeMenu }) {
  return (
    <ul className="sm:hidden bg-blue-900 rounded-b-xl py-4 space-y-2 absolute top-20 left-0 w-full z-40 shadow-lg">
      {items.map(({ page, label }) => (
        <li key={page}>
          <Link
            href={`/${page}`}
            className="block w-full text-left px-4"
            onClick={closeMenu}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center h-20 text-white px-4">
      <div className="flex justify-between items-center h-20">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-4xl cursor-pointer"
        >
          <IoIosMenu />
        </button>
        <DesktopNav items={navItems} />
      </div>
      {menuOpen && <MobileNav items={navItems} closeMenu={() => setMenuOpen(false)} />}
    </nav>
  );
}
