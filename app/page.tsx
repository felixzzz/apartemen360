import { Header } from '@/components/layout/header';
import { Hero } from '@/components/home/hero';
import Link from 'next/link';
import { Footer } from '@/components/layout/footer';
import { APARTMENTS } from '@/lib/data';
import { ListingCard } from '@/components/listing/listing-card';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <Hero />

      {/* Listings Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Apartemen Populer</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Pilihan unit terbaik yang paling banyak dicari minggu ini. Temukan hunian nyaman dengan fasilitas lengkap.</p>
          </div>

          {/* Listing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {APARTMENTS.map((apartment, index) => (
              <ListingCard key={apartment.id} apartment={apartment} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/sewa">
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]">
                Lihat Semua Apartemen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
