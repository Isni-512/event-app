import Image from "next/image";
import MarcheNoel from "@/public/img/MarcheNoel.webp";

export default function Presentation() {
  return (
    <section
      className="h-screen w-full bg-fixed flex items-center justify-center bg-center bg-cover px-4"
      style={{ backgroundImage: 'url("/img/MarcheNoel.webp")' }}
    >
      <h1 className="flex flex-col text-center max-w-4xl">
        <span className="text-5xl font-bold text-white">Bienvenue</span> 
        <span className="text-5xl font-bold text-white">au Marché de Noël🎄</span>
      </h1>
        {/* <div className="items-start">
            <p className="text-lg mb-4">
        Plongez dans la magie de Noël avec notre marché festif situé en plein cœur de la ville.
        Petits chalets en bois, lumières scintillantes, musiques traditionnelles et odeurs de cannelle vous attendent !
      </p>
      <p className="text-lg">
        Venez vivre l’expérience unique de Noël avec nous, du 24 au 26 décembre !
      </p> */}
    </section>
  );
}
