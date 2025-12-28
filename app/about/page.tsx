import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-32 pb-20 container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-6 text-slate-900">Tentang Kami</h1>
                <div className="prose prose-lg text-slate-600 max-w-3xl">
                    <p>
                        Apartemen360 adalah platform inovatif yang mengubah cara orang mencari dan menyewa apartemen di Indonesia.
                        Kami percaya bahwa mencari hunian seharusnya mudah, transparan, dan menyenangkan.
                    </p>
                    <p>
                        Dengan teknologi Tur Virtual 360°, kami membawa pengalaman survei properti langsung ke layar perangkat Anda,
                        menghemat waktu dan tenaga. Setiap listing yang kami tampilkan telah melalui proses verifikasi ketat
                        untuk memastikan keamanan dan kenyamanan Anda.
                    </p>
                    <h3 className="text-2xl font-bold mt-8 mb-4 text-slate-900">Misi Kami</h3>
                    <p>
                        Menjadi jembatan terpercaya antara penyewa dan pemilik properti dengan mengedepankan teknologi dan pelayanan prima.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
