import Jour1 from "@/components/jour/Jour1";
export const metadata = {
    title: 'Jour1',
    description: 'Découvrez le programme du 24 décembre : ouverture du marché, contes pour enfants, chorale de Noël et arrivée du Père Noël.',
    openGraph: {
        title: 'Jour1',
        description: 'Découvrez le programme du 24 décembre : ouverture du marché, contes pour enfants, chorale de Noël et arrivée du Père Noël.',
        images: ['./img/icon_santa.webp']
    }
}

export default function Page() {
    return <>
        <Jour1 />
    </>;
}