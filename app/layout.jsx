import Body from "@/components/Body";


import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'event-app | Accueil',
    description: 'Bienvenue sur le site officiel du Marché de Noël. Retrouvez toutes les informations sur les animations, les dates et les temps forts de l’événement.',
    openGraph: {
      title: 'event-app | Accueil',
      description: 'Bienvenue sur le site officiel du Marché de Noël. Retrouvez toutes les informations sur les animations, les dates et les temps forts de l’événement.',
      images: ['/img/icon_santa.webp']
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
                <Body children={children} />
        </html>
    );
}