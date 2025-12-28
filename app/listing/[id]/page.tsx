import { APARTMENTS } from '@/lib/data';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';
import { MapPin, Smartphone, Share2, Heart, Maximize, Wifi, Car, Utensils, Shield, Wind } from 'lucide-react';
import Link from 'next/link';

// Helper to simulate "similar listings"
function getSimilar(currentId: string) {
    return APARTMENTS.filter(a => a.id !== currentId).slice(0, 3);
}

export function generateStaticParams() {
    return APARTMENTS.map((apartment) => ({
        id: apartment.id,
    }))
}

export default async function ListingPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const apartment = APARTMENTS.find((a) => a.id === id);

    if (!apartment) {
        notFound();
    }

    const amenities = [
        { icon: Wifi, label: 'Free WiFi' },
        { icon: Car, label: 'Parking' },
        { icon: Utensils, label: 'Kitchen' },
        { icon: Shield, label: 'Security' },
        { icon: Wind, label: 'AC' },
        { icon: Maximize, label: 'Gym' },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Listing Content */}
            <div className="pt-24 pb-20">
                <div className="container mx-auto px-4">

                    {/* Breadcrumb & Title */}
                    <div className="mb-6">
                        <Link href="/" className="text-slate-500 hover:text-[var(--color-primary)] text-sm mb-2 inline-block">← Kembali ke Pencarian</Link>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{apartment.title}</h1>
                                <div className="flex items-center text-slate-600">
                                    <MapPin size={18} className="mr-2 text-[var(--color-primary)]" />
                                    {apartment.location}
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Button variant="outline" size="icon" className="rounded-full"><Share2 size={18} /></Button>
                                <Button variant="outline" size="icon" className="rounded-full"><Heart size={18} /></Button>
                            </div>
                        </div>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 h-[400px] md:h-[500px]">
                        <div className="md:col-span-2 relative h-full rounded-2xl overflow-hidden group">
                            <img
                                src={apartment.gallery?.[0] || apartment.image}
                                alt={apartment.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {apartment.has360 && (
                                <div className="absolute bottom-4 left-4">
                                    <Button className="gap-2 bg-white/90 text-slate-900 hover:bg-white backdrop-blur-sm">
                                        <Smartphone size={18} /> Tur Virtual 360°
                                    </Button>
                                </div>
                            )}
                        </div>
                        <div className="hidden md:grid grid-rows-2 gap-4">
                            <div className="rounded-2xl overflow-hidden bg-slate-100 relative group">
                                <img
                                    src={apartment.gallery?.[1] || apartment.gallery?.[0] || apartment.image}
                                    alt="Interior View"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="rounded-2xl overflow-hidden bg-slate-100 relative group">
                                <img
                                    src={apartment.gallery?.[2] || apartment.gallery?.[0] || apartment.image}
                                    alt="Detail View"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>
                        <div className="hidden md:grid grid-rows-2 gap-4">
                            <div className="rounded-2xl overflow-hidden bg-slate-100 relative group">
                                <img
                                    src={apartment.gallery?.[1] || apartment.image}
                                    alt="Kitchen View"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="rounded-2xl overflow-hidden bg-slate-100 relative group cursor-pointer">
                                <img
                                    src={apartment.gallery?.[2] || apartment.image}
                                    alt="Gallery View"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-50"
                                />
                                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg drop-shadow-md">
                                    Lihat Semua
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Details */}
                        <div className="lg:col-span-2 space-y-10">

                            {/* Key Stats */}
                            <div className="flex justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="text-center">
                                    <p className="text-sm text-slate-500 mb-1">Tipe Unit</p>
                                    <p className="font-bold text-slate-900 text-lg">{apartment.type}</p>
                                </div>
                                <div className="w-px bg-slate-200"></div>
                                <div className="text-center">
                                    <p className="text-sm text-slate-500 mb-1">Luas</p>
                                    <p className="font-bold text-slate-900 text-lg">{apartment.size} m²</p>
                                </div>
                                <div className="w-px bg-slate-200"></div>
                                <div className="text-center">
                                    <p className="text-sm text-slate-500 mb-1">Kamar Tidur</p>
                                    <p className="font-bold text-slate-900 text-lg">{apartment.bedrooms}</p>
                                </div>
                                <div className="w-px bg-slate-200"></div>
                                <div className="text-center">
                                    <p className="text-sm text-slate-500 mb-1">Kamar Mandi</p>
                                    <p className="font-bold text-slate-900 text-lg">{apartment.bathrooms}</p>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Deskripsi</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Nikmati hunian eksklusif di {apartment.title} yang menawarkan kenyamanan maksimal dan fasilitas lengkap.
                                    Terletak di lokasi strategis {apartment.location}, apartemen ini memiliki akses mudah ke pusat perbelanjaan, perkantoran, dan transportasi umum.
                                    Unit ini dilengkapi dengan berbagai fasilitas modern untuk menunjang gaya hidup Anda.
                                    Ideal untuk profesional muda maupun keluarga baru yang mencari keseimbangan hidup di tengah kota.
                                </p>
                            </div>

                            {/* Amenities */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Fasilitas Unit</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {amenities.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:border-slate-200 transition-colors">
                                            <item.icon size={20} className="text-slate-400" />
                                            <span className="text-slate-700 font-medium">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Booking */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-28 bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                                <div className="mb-6">
                                    <p className="text-sm text-slate-500 mb-1">Harga Sewa Mulai</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-2xl font-bold text-[var(--color-primary)]">
                                            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 3 }).format(apartment.priceRaw)}
                                        </span>
                                        <span className="text-slate-500">/ bulan</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <Button className="w-full h-12 text-lg" size="lg">Ajukan Sewa</Button>
                                    <Button variant="outline" className="w-full h-12 text-lg border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-amber-50">
                                        Jadwalkan Survey
                                    </Button>
                                    <Button variant="ghost" className="w-full h-10 text-slate-500">
                                        Tanya WhatsApp
                                    </Button>
                                </div>

                                <div className="mt-6 pt-6 border-t border-slate-100">
                                    <div className="flex items-center gap-3 mb-4">
                                        {/* Agent Avatar */}
                                        <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                                            <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500 text-xs">A</div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900">Agent Apartemen360</p>
                                            <p className="text-xs text-slate-500">Online 5 menit lalu</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
