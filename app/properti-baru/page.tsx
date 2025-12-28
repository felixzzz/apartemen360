import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function NewPropertyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-32 pb-20 container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-slate-900">Properti Baru (Launch)</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-64 bg-slate-200 flex items-center justify-center text-slate-400">Project Banner A</div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Grand Future Residence</h3>
                            <p className="text-slate-500 text-sm mb-4">Coming Soon - Jakarta Barat</p>
                            <span className="bg-blue-100 text-[var(--color-primary)] px-3 py-1 rounded-full text-xs font-bold">Launching 2026</span>
                        </div>
                    </div>
                    <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-64 bg-slate-200 flex items-center justify-center text-slate-400">Project Banner B</div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Skyline City</h3>
                            <p className="text-slate-500 text-sm mb-4">Under Construction - Tangerang</p>
                            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">Open NUP</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
