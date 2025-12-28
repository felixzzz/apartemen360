import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function BlogPage() {
    const posts = [
        { id: 1, title: 'Tips Memilih Apartemen Pertama', date: '28 Dec 2025', category: 'Tips' },
        { id: 2, title: 'Kenapa Investasi Properti di 2026 Sangat Menjanjikan?', date: '20 Dec 2025', category: 'Investasi' },
        { id: 3, title: '5 Desain Interior Apartemen Minimalis', date: '15 Dec 2025', category: 'Design' },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-32 pb-20 container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-slate-900">Blog & Artikel</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div key={post.id} className="border border-slate-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="h-48 bg-slate-100"></div>
                            <div className="p-6">
                                <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-2 block">{post.category}</span>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{post.title}</h3>
                                <p className="text-sm text-slate-400">{post.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
