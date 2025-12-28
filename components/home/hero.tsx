'use client';

import { motion } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
    return (
        <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Placeholder for now until image is generated and moved */}
                <div className="absolute inset-0 bg-slate-900/40 z-10" />
                {/* We will replace this image src with the generated artifact path later */}
                <img
                    src="/images/hero-apartment.png"
                    alt="Luxury Apartment View"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-md"
                >
                    Temukan Hunian Impian <br className="hidden md:block" /> dengan <span className="text-[var(--color-secondary)]">Standard Baru</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-sm font-light"
                >
                    Jelajahi ribuan apartemen premium dengan tur virtual 360°. Transparan, Mudah, dan Terpercaya.
                </motion.p>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-white p-4 rounded-xl shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center"
                >
                    <div className="flex-1 w-full relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Cari lokasi, nama gedung, atau kota..."
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 rounded-lg border-none focus:ring-2 focus:ring-[var(--color-primary)] outline-none text-slate-900 placeholder:text-slate-400"
                        />
                    </div>
                    <div className="flex-[0.5] w-full">
                        <select className="w-full px-4 py-3 bg-slate-50 rounded-lg border-none focus:ring-2 focus:ring-[var(--color-primary)] outline-none text-slate-900 cursor-pointer appearance-none">
                            <option value="">Tipe Sewa</option>
                            <option value="monthly">Bulanan</option>
                            <option value="yearly">Tahunan</option>
                            <option value="buy">Beli</option>
                        </select>
                    </div>
                    <Button size="lg" className="w-full md:w-auto h-[52px]">
                        <Search className="mr-2" size={20} />
                        Cari Unit
                    </Button>
                </motion.div>

                {/* Trusted By / Stats (Optional) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-12 flex justify-center gap-8 text-white/80 text-sm font-medium"
                >
                    <div className="flex items-center gap-2">
                        <span className="bg-white/20 p-1 rounded-full">✓</span>
                        100% Verified
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="bg-white/20 p-1 rounded-full">✓</span>
                        360° Virtual Tours
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="bg-white/20 p-1 rounded-full">✓</span>
                        Cicilan 0%
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
