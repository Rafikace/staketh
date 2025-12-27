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
            <section className="flex flex-col gap-4 justify-center item-center text-center w-full">
                <div className="w-full gap-3">
                <h2 className="font-[700]">Bridging the Gap</h2>
                <h6 className="text-center w-full p-2">Traditional banks exclude billions. internet-reliant Defi is inaccessible to many.
                    <br />Openvault allows any mobile phone to interact directly with the blockchain
                </h6>
                </div>
                <article className="flex flex-col gap-4  md:flex-row md:px-12 md:py-8 p-2 w-full justify-center md:justify-around items-center">
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