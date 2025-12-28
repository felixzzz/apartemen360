import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function JualPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-32 pb-20 container mx-auto px-4 text-center">
                <h1 className="text-3xl font-bold mb-4 text-slate-900">Beli Apartemen</h1>
                <p className="text-slate-600 mb-12">Temukan properti investasi terbaik untuk masa depan Anda.</p>

                <div className="max-w-md mx-auto bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <p className="text-slate-500 italic">"Belum ada listing penjualan aktif saat ini."</p>
                    <p className="text-sm text-slate-400 mt-2">Silakan cek kembali nanti atau hubungi sales kami.</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
