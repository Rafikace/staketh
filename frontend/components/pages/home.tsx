import { Phone, PhoneCall } from "lucide-react";
import Navbar from "../commons/navbar";
import Hero from "./home/hero";
import GapCard from "../commons/gapcard";

export default function Home() {
    const cards = [
        {
            icons: <PhoneCall />,
            header: "Offline-first",
            desc: 'No internet? No Problem. Our protocol is build on USSD Technology, compatible with 99% of mobile phones globally, even without data plans'
        },
        {
            icons: <PhoneCall />,
            header: "Non-Custodial",
            desc: 'You hold the keys. Funds are stored in smart contracts only you control. We never have access to your savings'
        },
        {
            icons: <PhoneCall />,
            header: "Censorship-resistant",
            desc: 'Built on decentralized infrastructure that cannot be shutdown by local authorities or centralized banking failures.'
        }
    ]
    return (
        <div className="w-full flex flex-col">
            <main className="min-h-screen w-full flex flex-col">
                <Navbar />
                <Hero />
            </main>
            <section className="flex flex-col justify-center item-center text-center w-full">
                <h4>Bridging the Gap</h4>
                <p className="text-center w-full">Traditional banks exclude billions. internet-reliant Defi is inaccessible to many.
                    <br />Openvault allows any mobile phone to interact directly with the blockchain
                </p>
                <article>
                    {
                        cards.map((item, index) => (
                            <GapCard key={index} icon={item.icons} description={item.desc} header={item.header} />
                        ))
                    }
                </article>
            </section>
        </div>
    )
}