import jours from "@/public/json/JourEvenement";
import Timer  from "@/components/home/Timer"; // assure-toi du bon chemin

export default function JourAffichage({ id }) {
  const jour = jours.find((j) => j.id === id);

  if (!jour) return <p>Jour introuvable.</p>;

  return (
    <section
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed text-white py-32 px-6"
      style={{ backgroundImage: `url(${jour.image})` }}
    >
      <div className="bg-black/60 p-4 rounded-xl max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">{jour.titre}</h1>

        {/* ⏱️ Timer bien positionné ici */}
        <Timer targetDate={jour.target} />

        <p className="text-lg mb-6 text-center max-w-2xl mx-auto">{jour.description}</p>

        <div className="bg-white/65 text-gray-800 rounded-xl p-2 shadow mb-4 max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">🕒 Programme de la journée</h2>
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