"use client";
import Link from "next/link";
import NavBar from "./Nav";
import { TbChristmasTreeFilled } from "react-icons/tb";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

import i18next from "@/i18next";
import { useTranslation } from "react-i18next";

import { useMyContext } from "@/provider/MyContextProvider";

function Logo({ tHeader }) {
  return (
    <Link href="/" aria-label="Accueil">
      <div className="flex items-center gap-2">
        <TbChristmasTreeFilled className="text-green-400 text-2xl" />
        <h1
          className="text-xl font-bold text-white">
          {tHeader("header.titre")}
        </h1>
      </div>
    </Link>
  );
}

export default function Header() {
  const { theme, toggleTheme } = useMyContext();
      const { t } = useTranslation("common");
    const { t: tHeader } = useTranslation("header");
  return (
    <header
      className={`h-20 ${
        theme === "light"
          ? "bg-blue-900 text-white"
          : "bg-black"
      } shadow-xl fixed top-0 left-0 w-full z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Logo tHeader={tHeader} />
        <NavBar />
        <button
          onClick={toggleTheme}
          className="ml-8 text-2xl cursor-pointer"
        >
          {theme === "light" ? <FaMoon /> : <IoIosSunny />}
        </button>
        <select
          onChange={(e) => i18next.changeLanguage(e.target.value)}
          defaultValue={i18next.language}
          className={`theme === "light"
          ? "bg-blue-900 text-white"
          : "bg-black border-b-1 border-white"
      } text-white ml-4 p-2 rounded`}>
          <option value="en" className="text-black">EN</option>
          <option value="fr" className="text-black">FR</option>
        </select>
      </div>
    </header>
  );
}
