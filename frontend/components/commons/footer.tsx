import { Github, Vault,Twitter } from "lucide-react"

export default function Footer() {
    return (
        <main className="w-full py-8 px-6 bg-primary/20">
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
            
        </main>
    )
}