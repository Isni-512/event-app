"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Home from "@/app/page";
import Jour1 from "@/components/jour/Jour1";
// skipcq: JS-0128
import Jour2 from "@/components/jour/Jour2";
import Jour3 from "@/components/jour/Jour3";
import Galerie from "@/components/galeries/Galeries";

import { useState } from "react";

import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });
// export const metadata = {
//     title: 'event-app',
//     description: 'Demo Cours Programmation web avancé',
// };
export default function RootLayout({ children }) {
    const [currentPage, setCurrentPage] = useState("Accueil");
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                <Header changePage={setCurrentPage} />
                 <main className="flex-1">
                    {/* {children} */}
                    {currentPage === "Accueil" ? (
                        <Home />
                    ) : currentPage === "Jour1" ? (
                        <Jour1 />
                    ) : currentPage === "Jour2" ? (
                        <Jour2 />
                    ) : currentPage === "Jour3" ? (
                        <Jour3 />
                    ) : currentPage === "Galerie" ? (
                        <Galerie />
                    ) : (
                        <div>Page Not Found</div>
                    )}
                </main>                
                <Footer />
            </body>
        </html>
    );
}