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
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                <Header />
                 <main className="flex-1">
                    {children}
                </main>                
                <Footer />
            </body>
        </html>
    );
}