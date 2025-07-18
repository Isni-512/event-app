"use client";
import Body from "@/components/Body";


import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });


import MyContextProvider from "@/provider/MyContextProvider";
import { appWithTranslation } from "next-i18next";
import i18n from "@/i18next";


// export const metadata = {
//     title: 'event-app | Accueil',
//     description: 'Bienvenue sur le site officiel du Marché de Noël. Retrouvez toutes les informations sur les animations, les dates et les temps forts de l’événement.',
//     openGraph: {
//       title: 'event-app | Accueil',
//       description: 'Bienvenue sur le site officiel du Marché de Noël. Retrouvez toutes les informations sur les animations, les dates et les temps forts de l’événement.',
//       images: ['/img/icon_santa.webp']
//     }
// }

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <MyContextProvider>
                <Body children={children} />
            </MyContextProvider>
        </html>
    );
}