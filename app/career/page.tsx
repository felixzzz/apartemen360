import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function CareerPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-32 pb-20 container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4 text-slate-900">Karir di Apartemen360</h1>
                <p className="text-slate-600 mb-8">Bergabunglah dengan tim kami untuk merevolusi industri properti di Indonesia.</p>
                <div className="bg-slate-50 p-8 rounded-xl text-center">
                    <p className="text-slate-500">Saat ini belum ada lowongan yang tersedia. Silakan cek kembali nanti.</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
