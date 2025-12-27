import { Phone, PhoneCall } from "lucide-react";
import Navbar from "../commons/navbar";
import Hero from "./home/hero";
import GapCard from "../commons/gapcard";
import { Button } from "../ui/button";
import Footer from "../commons/footer";

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
        <div className="w-full flex flex-col items-center">
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
            <div className="w-full border-y-1 flex flex-col md:flex-row md:justify-center md:gap-6 p-6 md:p-8 bg-primary/20">
                <section className="h-full w-full border border-1 rounded-lg md:w-[40%]">
                </section>
                <section>
                    <h1>Simple technology</h1>
                    <h1>Complex Security</h1>
                    <article>
                        { 
                            [
                                { header: "Dial the code", description: "User dials a simple ussd cdoe on any mobile phone" },
                                { header: "Deposit local currency ", description: "Deposit fiat via mobile money agents. The protocol converts it to stable coins" },
                                { header: "Earn, swap, transact", description: "Interactions are done as funds are deployed to defi strategies to earn yields" }
                            ].map((item,index) => (
                                <div key={index} className="flex gap-4 py-2">
                                    <h5 className="text-secondary border justify-center h-6 w-6 items-center flex rounded-[50%] bg-destructive/40">{index}</h5>
                                    <article className="flex flex-col">
                                        <h4>{item.header}</h4>
                                        <h6>{item.description}</h6>
                                    </article>
                                </div>
                            ))
                        }
                    </article>
                </section>
            </div>
            <section className="my-8 md:my-18 rounded-lg border text-center flex flex-col items-center max-w-[650px] py-8 px-6 bg-primary/20">
                <h1>Ready to bank the unbanked</h1>
                <h4 className="w-4/5 max-w-[750px]">Join the evolution. start saving securely or build on top of our protocol today</h4>
                <article className="flex justify-center w-full items-center gap-2 my-4">
                    <Button>
                        Launch App
                    </Button>
                    <Button variant={"outline"}>
                        Documentation
                    </Button>
                </article>
            </section>
            <Footer />
        </div>
    )
}