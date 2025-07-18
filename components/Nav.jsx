"use client"
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("common");
  const { t: tHeader } = useTranslation("header");

  const navItems = [
    { page: "", label: tHeader("header.home") },
    { page: "jour1", label: tHeader("header.day1") },
    { page: "jour2", label: tHeader("header.day2") },
    { page: "jour3", label: tHeader("header.day3") },
    //{ page: "galerie", label: "Galerie" },
    { page: "contact", label: tHeader("header.contact") },
  ];

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
