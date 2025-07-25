import jours from "@/public/json/JourEvenement";
import Timer from "@/components/home/Timer";
import Image from "next/image";

export default function JourAffichage({ id }) {
  const jour = jours.find((j) => j.id === id);
  if (!jour) return <p>Jour introuvable.</p>;

  return (
    <section className="relative w-full text-white py-32 px-6">
      <Image
        src={jour.image}
        alt={jour.titre}
        fill
        priority
        quality={70}
        className="object-cover object-center -z-10"
        sizes="100vw"
      />
      <div className="bg-black/60 p-8 rounded-xl max-w-4xl mx-auto relative">
        <h1 style={{ fontSize: "3rem" }} className="font-bold">
          {jour.titre}
        </h1>
        <Timer targetDate={jour.target} />
        <p className="text-lg mb-6 text-center max-w-2xl mx-auto">
          {jour.description}
        </p>
        <div className="bg-white/65 text-gray-800 rounded-xl p-6 shadow mb-4 max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">
            🕒 Programme de la journée
          </h2>
          <ul className="space-y-2">
            {jour.horaires.map((event, index) => (
              <li key={index}>
                {event.heure} – {event.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}