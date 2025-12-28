import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-32 pb-20 container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4 text-slate-900">Kebijakan Privasi</h1>
                <div className="prose text-slate-600">
                    <p>Kami menghargai privasi Anda. Halaman ini menjelaskan bagaimana kami mengelola data pengguna.</p>
                    {/* Placeholder content */}
                </div>
            </div>
            <Footer />
        </main>
    );
}
