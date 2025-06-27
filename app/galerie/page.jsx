import Galerie from "@/components/galeries/Galeries";
export const metadata = {
    title: 'Galeries',
    description: 'Parcourez notre galerie photo pour revivre l’ambiance féerique du Marché de Noël à travers les plus beaux souvenirs en image.',
    openGraph: {
      title: 'Galeries',
      description: 'Parcourez notre galerie photo pour revivre l’ambiance féerique du Marché de Noël à travers les plus beaux souvenirs en image.',
      images: ['./img/icon_santa.webp']
    }
}

export default function Page() {
    return <>
        <Galerie />
    </>;
}