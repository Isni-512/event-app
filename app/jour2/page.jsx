import Jour2 from "@/components/jour/Jour2";
export const metadata = {
    title: 'Jour2',
    description: 'Le 25 décembre, partagez un moment magique en famille avec des spectacles, des animations festives et un concert chaleureux.',
    openGraph: {
        title: 'Jour2',
        description: 'Le 25 décembre, partagez un moment magique en famille avec des spectacles, des animations festives et un concert chaleureux.',
        images: ['./img/icon_santa.webp']
    }
}

export default function Page() {
    return <>
        <Jour2 />
    </>;
}