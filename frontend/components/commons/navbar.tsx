import { Vault } from 'lucide-react';

export default function Navbar() {
    return (
        <header>
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
        </header>
    )
}