'use client';

import { MdOutlineInstallDesktop } from 'react-icons/md';
import { useEffect, useState } from 'react';

export default function InstallPrompt() {
    const [installPrompt, setInstallPrompt] = useState(null);

    useEffect(() => {
        const getInstallPrompt = (event) => {
            event.preventDefault();
            setInstallPrompt(event);
        };

        window.addEventListener('beforeinstallprompt', getInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', getInstallPrompt);
        };
    }, []);

    const handleClose = () => setInstallPrompt(null);

    const handleInstall = async () => {
        installPrompt.prompt();
        const { outcome } = await installPrompt.userChoice;
        if (outcome === 'accepted') {
            setInstallPrompt(null);
        }
    };

    return (
        installPrompt && (
            <div className="flex items-center justify-between px-4 py-2 bg-gray-100 gap-2 border rounded-md mb-4 text-sm">
                <div className="flex items-center gap-2">
                    <MdOutlineInstallDesktop />
                    <button onClick={handleInstall}>
                        Cliquer ici pour installer!
                    </button>
                </div>
                <button onClick={handleClose}>&times;</button>
            </div>
        )
    );
}
