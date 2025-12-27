import Navbar from "../commons/navbar";
import Hero from "./home/hero";

export default function Home() { 
    return (
        <div className="w-full flex">
            <main className="min-h-screen w-full flex flex-col">
                <Navbar />
                <Hero/>
            </main>
        </div>
    )
}