import { Button } from "@/components/ui/button";

export default function Hero() { 
    return (
        <div>
            <section className="flex flex-col gap-3">
                <p>Live on mainnet</p>
                <article className="headers">
                    <h1>Offline</h1>
                    <h1>Permisionless</h1>
                    <h1>UnStoppable</h1>
                </article>
                <p className="max-w-[400px] text-[1rem]">The saving protocol for the unbanked world. Access high-yield Defi vaults without an internet connection via USSD. Bank the unbanked, completely offline</p>
                <div className="flex gap-3">
                    <Button variant={"destructive"}>Start Saving</Button>
                    <Button variant={"outline"} >read whitepaper</Button>
                </div>
            </section>
        </div>
    )
}