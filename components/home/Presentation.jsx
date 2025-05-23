import Image from "next/image";
import MarcheNoel from "@/public/img/MarcheNoel.webp";

export default function Presentation() {
  return (
    <section className="flex flex-col items-center p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-red-800 mb-6">
        Bienvenue au Marché de Noël🎄
      </h1>
      <Image src={MarcheNoel} alt="Marché de Noël festif" height={500}  className="p-8" />
        <div className="items-start">
            <p className="text-lg mb-4">
        Plongez dans la magie de Noël avec notre marché festif situé en plein cœur de la ville.
        Petits chalets en bois, lumières scintillantes, musiques traditionnelles et odeurs de cannelle vous attendent !
      </p>
      <p className="text-lg">
        Venez vivre l’expérience unique de Noël avec nous, du 24 au 26 décembre !
      </p>
        </div>
    </section>
  );
}
