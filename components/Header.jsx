"use client";
import Link from "next/link";
import NavBar from "./Nav";

// Importing icons for the header
import { TbChristmasTreeFilled } from "react-icons/tb";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

// Importing i18next for internationalization
import i18next from "@/i18next";
import { useTranslation } from "react-i18next";
import { useMyContext } from "@/provider/MyContextProvider";

// Logo component for the header
function Logo({ tHeader }) {
  const titre = tHeader("header.titre");
  if (!titre) return null; // ou un loader
  return (
    <Link href="/" aria-label="Accueil">
      <div className="flex items-center gap-2">
        <TbChristmasTreeFilled className="text-green-400 text-2xl" />
        <h1 className="font-bold text-white">
          {titre}
        </h1>
      </div>
    </Link>
  );
}

// Header component that includes the logo, navigation bar, theme toggle, and language selector
export default function Header() {
  const { theme, toggleTheme } = useMyContext();
  const { t } = useTranslation("common");
  const { t: tHeader } = useTranslation("header");
  return (
    <header
      className={`h-20 ${theme === "light"
        ? "bg-blue-900 text-white"
        : "bg-black"
        } shadow-xl m-auto flex justify-between items-center fixed top-0 left-0 w-full z-50`}
    >
      <Logo tHeader={tHeader} />
      <div className="max-w-7xl m-0 px-4 flex items-center">
        <NavBar />
        <button
          onClick={toggleTheme}
          className="ml-8 text-2xl cursor-pointer"
          aria-label={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}
          title={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}
        >
          {theme === "light"
            ? <FaMoon className="text-yellow-300" />
            : <IoIosSunny className="text-white" />
          }
        </button>
        <label htmlFor="lang-select" className="sr-only">Choisir la langue</label>
        <select
          id="lang-select"
          onChange={(e) => i18next.changeLanguage(e.target.value)}
          defaultValue={i18next.language}
          className={`${theme === "light"
            ? "bg-blue-900 text-white"
            : "bg-black border-b-1 border-white"
            } text-white ml-4 p-2 rounded`}
          aria-label="Choisir la langue"
        >
          <option value="en" className="text-black">EN</option>
          <option value="fr" className="text-black">FR</option>
        </select>
      </div>
    </header>
  );
}
