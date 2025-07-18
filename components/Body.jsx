"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useMyContext } from "@/provider/MyContextProvider";

export default function Body({ children }) {
    return (
        <body className="flex flex-col min-h-screen ">
            <Header />
            <main
                className={`flex-1`}
            >
                {children}
            </main>
            <Footer />
        </body>
    );
}
