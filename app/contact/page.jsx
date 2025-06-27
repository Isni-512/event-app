import Contact from "@/components/Contact";
export const metadata = {
    title: 'Contacts',
    description: 'Une question ou une demande ? Envoyez-nous un message grâce à ce formulaire de contact. Nous vous répondrons rapidement.',
    openGraph: {
      title: 'Contacts',
      description: 'Une question ou une demande ? Envoyez-nous un message grâce à ce formulaire de contact. Nous vous répondrons rapidement.',
      images: ['./img/icon_santa.webp']
    }
}

export default function Page() {
    return <>
        <Contact />
    </>;
}