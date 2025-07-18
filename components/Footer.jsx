import { useMyContext } from "@/provider/MyContextProvider";
// Importing useTranslation for internationalization
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { theme } = useMyContext();
  const { t } = useTranslation("common");
  const { t: tFooter } = useTranslation("footer");
  return (
    <footer className={`flex flex-col justify-center items-center h-auto text-center ${theme === "light"
        ? "bg-blue-900 text-white"
        : "bg-black border-b-1 border-white"
      } text-white py-4`}>
      <p>&copy; {tFooter("footer.evenement")}</p>
      <p>{tFooter("footer.droit")}</p>
      <p>{tFooter("footer.fait")} Israel-Claude Nsimbi &amp; Eunice Muleka</p>
      <p>{tFooter("footer.college")}</p>
    </footer>
  );
}


