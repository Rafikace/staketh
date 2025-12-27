import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <div className="flex flex-col gap-3 h-full justify-between items-center w-full">
            <div className="flex flex-col md:flex-row gap-3 sm:gap-6 py-6 px-6 md:px-12 h-full justify-between items-center w-full">
                <section className="flex flex-col gap-3 md:gap-8 md:w-[40%]">
                    <p className="p-[3px_4px] rounded-lg flex gap-2 items-center max-w-[125px] text-sm bg-destructive/10 border-1 border-primary"><div className="w-2 h-2 rounded-[50%] bg-destructive" />Live on mainnet</p>
                    <article className="headers">
                        <h1 className="text-foreground/30">Offline.</h1>
                        <h1 className="text-foreground/30">Permisionless.</h1>
                        <h1 className="text-destructive">Unstoppable.</h1>
                    </article>
                    <p className="max-w-[400px] sm:text-[0.9rem]">The saving protocol for the unbanked world. Access high-yield Defi vaults without an internet connection via USSD. Bank the unbanked, completely offline</p>
                    <div className="flex gap-3">
                        <Button variant={"destructive"}>Start Saving</Button>
                        <Button variant={"outline"} >read whitepaper</Button>
                    </div>
                    <div className="flex gap-4 justify-start items-center text-[0.85rem] text-gray-500 dark:text-gray-300">
                        <article className="flex gap-2">
                            <input type="checkbox" checked className={"border p-2 rounded-[50%] bg-background shadow-xs hover:bg-accent "} />
                            <p>Non-custodial</p>
                        </article>
                        <article className="flex gap-2">
                            <input type="checkbox" checked className={"border p-2 rounded-[50%] bg-background shadow-xs hover:bg-accent"} />
                            <p>Audited</p>
                        </article>  <article className="flex gap-2">
                            <input type="checkbox" checked className={"border p-2 rounded-[50%] bg-background shadow-xs hover:bg-accent"} />
                            <p>Open-source</p>
                        </article>
                    </div>
                </section>
                <section className="h-full w-full border border-1 rounded-lg md:w-[40%]">
                </section>
            </div>
            <div className="hero_footer">
                <article>
                    <p>Total Value locked</p>
                    <h4>$14,203,941</h4>
                </article>
                <article>
                    <p>Active offline vaults</p>
                    <h4>8,420</h4>
                </article>
                <article>
                    <p>APY</p>
                    <h4>~14%</h4>
                </article>
            </div>
        </div>
    )
}