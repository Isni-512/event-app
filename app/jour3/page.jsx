import Jour3 from "@/components/jour/Jour3";
export const metadata = {
    title: 'Jour3',
    description: 'Pour clôturer le marché le 26 décembre, profitez des dernières animations, d’un atelier créatif et d’un concert final.',
    openGraph: {
        title: 'Jour3',
        description: 'Pour clôturer le marché le 26 décembre, profitez des dernières animations, d’un atelier créatif et d’un concert final.',
        images: ['./img/icon_santa.webp']
    }
}

export default function Page() {
    return <>
        <Jour3 />
    </>;
}