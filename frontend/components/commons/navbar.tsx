import { Vault } from 'lucide-react';
import { Button } from '../ui/button';

export default function Navbar() {
    return (
        <header className="flex w-full px-3 py-3 sm:px-5 sm:py-4 justify-between items-center">
            <aside className='flex gap-2 text-primary'>
                <Vault size={10} color='#EC7F13' />
                <h2>OpenVault</h2>
            </aside>
            <ul className='md:flex gap-3 hidden'>
                <li>protocol</li>
                <li>USSD</li>
                <li>Governance</li>
                <li>docs</li>
            </ul>
            <Button>Launch App</Button>
        </header>
    )
}