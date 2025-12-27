import { Github, Vault,Twitter } from "lucide-react"

export default function Footer() {
    return (
        <main>
            <aside className="flex flex-col gap-3">
                <div className='flex gap-1 text-primary items-center '>
                    <Vault size={25} color='#EC7F13' />
                    <h3>Openvault</h3>
                </div>
                <p className="max-w-[300px] text-start">The decentralized saving protocol for the offline world.EMpowering financial freedon withouth boundaries</p>
                <div className="flex gap-4">
                    <Github size={25} />
                    <Twitter size={25}/>
                </div>
            </aside>
        </main>
    )
}