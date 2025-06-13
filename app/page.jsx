'use client'
import Activites from "@/components/home/Activites";
import Presentation from "@/components/home/Presentation";
import Image from "next/image";
import { use } from "react";

export default function Home() {
    return (
        <>
        <div className="mt-18" >
        <Presentation />
        <Activites />
        </div>
        </>
    );
}
