"use client"
import { Vault } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    return (
        <header className="flex w-full px-3 py-2 sm:px-5 sm:py-4 justify-between items-center border-b-1 border-border">
            <aside className='flex gap-1 text-primary items-center group cursor-pointer' onClick={() => {router.push('/')}}>
                <Vault size={25} color='#EC7F13' />
                <h3>Openvault</h3>
            </aside>
            <ul className='md:flex gap-4 hidden'>
                <li>protocol</li>
                <li>USSD</li>
                <li>Governance</li>
                <li>docs</li>
            </ul>
            <div className="flex flex-col  gap-2">
                <Button variant={"destructive"}>Launch App</Button>
            </div>
        </header>
    )
}