import galerie from "@/public/json/images.json";
import GalerieImage from "@/components/galeries/GaleriesImage";

export default function Galerie() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16 pt-24">
            <h1 className="text-3xl font-bold text-red-800 mb-8 text-center">
                Galerie du Marché de Noël OH OH OH 🎄
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {galerie.map((image) => (
                    <GalerieImage
                        key={image.id}
                        titre={image.titre}
                        image={image.image}
                        alt={image.alt}
                    />
                ))}
            </div>
        </section>
    );
}