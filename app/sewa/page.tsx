import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ListingCard } from '@/components/listing/listing-card';
import { APARTMENTS } from '@/lib/data';

export default function SewaPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-32 pb-20 container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-slate-900">Sewa Apartemen</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {APARTMENTS.map((apartment, index) => (
                        <ListingCard key={apartment.id} apartment={apartment} index={index} />
                    ))}
                    {/* Repeat data to make it look like more listings */}
                    {APARTMENTS.map((apartment, index) => (
                        <ListingCard key={`copy-${apartment.id}`} apartment={apartment} index={index + 4} />
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
