import Navbar from "../commons/navbar";
import Hero from "./home/hero";

export default function Home() { 
    return (
        <div className="w-full flex">
            <main className="h-screen w-full">
                <Navbar />
                <Hero/>
            </main>
        </div>
    )
}