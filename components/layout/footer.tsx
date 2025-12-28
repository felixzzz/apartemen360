import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Apartemen360</h3>
                        <p className="text-sm leading-relaxed">
                            Platform penyewaan apartemen terpercaya dengan fitur 360 virtual tour pertama di Indonesia.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Perusahaan</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-white">Tentang Kami</Link></li>
                            <li><Link href="/career" className="hover:text-white">Karir</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Hubungi Kami</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Dukungan</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/help" className="hover:text-white">Pusat Bantuan</Link></li>
                            <li><Link href="/terms" className="hover:text-white">Syarat & Ketentuan</Link></li>
                            <li><Link href="/privacy" className="hover:text-white">Kebijakan Privasi</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
                    &copy; {new Date().getFullYear()} Apartemen360. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
