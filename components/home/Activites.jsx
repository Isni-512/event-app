// components/Activites.jsx

export default function Activites() {
  return (
    <section className="bg-white py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-red-800 mb-8">
        Activités proposées
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🎅 Rencontre avec le Père Noël</h3>
          <p className="text-gray-600">Un moment privilégié pour petits et grands avec le Père Noël.</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">⛸️ Patinoire</h3>
          <p className="text-gray-600">Patinez en famille ou entre amis dans une ambiance festive.</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🎶 Animations musicales</h3>
          <p className="text-gray-600">Des artistes locaux et des chants de Noël pour une ambiance magique.</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🖌️ Ateliers pour enfants</h3>
          <p className="text-gray-600">Création de décorations et bricolages simples tout au long de la journée.</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🍪 Saveurs de Noël</h3>
          <p className="text-gray-600">Dégustations de produits locaux, sucrés et salés.</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🛍️ Chalets d’artisans</h3>
          <p className="text-gray-600">Des idées cadeaux uniques et locales à découvrir.</p>
        </div>
      </div>
    </section>
  );
}
