import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function HelpPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-32 pb-20 container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-slate-900">Pusat Bantuan</h1>
                <div className="space-y-4 max-w-2xl">
                    <details className="group border border-slate-200 rounded-lg p-4 cursor-pointer">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            Bagaimana cara menyewa apartemen?
                            <span className="transition group-open:rotate-180">▼</span>
                        </summary>
                        <div className="mt-2 text-slate-600 text-sm">
                            Pilih unit yang Anda sukai, klik "Ajukan Sewa" atau "Jadwalkan Survey", dan tim kami akan menghubungi Anda.
                        </div>
                    </details>
                    <details className="group border border-slate-200 rounded-lg p-4 cursor-pointer">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            Apakah harga sudah termasuk maintenance fee?
                            <span className="transition group-open:rotate-180">▼</span>
                        </summary>
                        <div className="mt-2 text-slate-600 text-sm">
                            Tergantung pada unit masing-masing. Informasi detail tersedia di deskripsi listing atau bisa ditanyakan langsung ke agen kami.
                        </div>
                    </details>
                </div>
            </div>
            <Footer />
        </main>
    );
}
