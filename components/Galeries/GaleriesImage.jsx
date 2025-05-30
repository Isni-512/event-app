import Image from "next/image";

export default function GalerieImage({ titre, image, alt }) {
    return (
        <div className="relative group overflow-hidden rounded shadow hover:scale-105 transition-transform duration-300">
            <div className="w-full h-64 relative">
                <Image src={image} alt={alt} fill className="object-cover group-hover:opacity-80 transition-opacity duration-300" />
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {titre}
            </div>
        </div>
    );
}