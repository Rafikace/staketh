import { Github, Vault,Twitter } from "lucide-react"

export default function Footer() {
    return (
        <main className="w-full py-8 px-6 bg-primary/20 flex flex-col md:flex-row md:justify-between">
            <aside className="flex flex-col gap-3">
                <div className='flex gap-1 text-destructive items-center '>
                    <Vault size={25} className="text-destructive" />
                    <h3>Openvault</h3>
                </div>
                <p className="max-w-[300px] text-start">The decentralized saving protocol for the offline world.EMpowering financial freedon withouth boundaries</p>
                <div className="flex gap-4 icons">
                    <Github size={25} />
                    <Twitter size={25}/>
                </div>
            </aside>
            <main className="w-full gap-4 flex-col flex md:flex-row md:justify-around md:items-start md:max-w-[800px] ">
                { 
                    [
                        {header:"protocol",children:["Governance","Developers","Security","Bug Bounty"]},
                        {header:"community",children:["Discord","forum","blog","telegram"]},
                        {header:"legal",children:["privacy","terms"]}
                    ].map((item,index) => (
                        <article key={index} className="flex flex-col gap-3">
                            <h4 className="uppercase text-md">{item.header}</h4>
                            <div className="flex flex-col gap-3">
                                {item.children.map((text, counter) => (
                                    <h6 key={counter} className="uppercase hover:underline text-[0.7rem] font-bold">
                                        {text}
                                    </h6>
                                ))}
                            </div>
                        </article>
                    ))
                }
            </main>
        </main>
    )
}