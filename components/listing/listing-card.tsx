'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Maximize, CheckCircle, Smartphone } from 'lucide-react';
import { Apartment } from '@/lib/data';
import { Button } from '@/components/ui/button';

interface ListingCardProps {
    apartment: Apartment;
    index: number;
}

export function ListingCard({ apartment, index }: ListingCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
        >
            <Link href={`/listing/${apartment.id}`}>
                <div className="relative h-[250px] overflow-hidden">
                    {/* Image */}
                    <div className="absolute inset-0 bg-slate-200">
                        <img
                            src={apartment.image}
                            alt={apartment.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                        {apartment.isVerified && (
                            <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                <CheckCircle size={10} /> VERIFIED
                            </span>
                        )}
                        {apartment.has360 && (
                            <span className="bg-[var(--color-secondary)] text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm animate-pulse">
                                <Smartphone size={10} /> 360° TOUR
                            </span>
                        )}
                    </div>

                    {/* Price Overlay (Mobile or Alt Style) - keeping it simple for now */}
                </div>

                <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-[var(--color-primary)] transition-colors line-clamp-1">
                            {apartment.title}
                        </h3>
                    </div>

                    <div className="flex items-center text-slate-500 text-sm mb-4">
                        <MapPin size={14} className="mr-1" />
                        <span className="truncate">{apartment.location}</span>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-t border-slate-100 border-b mb-4">
                        <div className="flex flex-col items-center justify-center text-center">
                            <Bed size={16} className="text-slate-400 mb-1" />
                            <span className="text-xs font-medium text-slate-700">{apartment.bedrooms} Bed</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center border-l border-slate-100">
                            <Bath size={16} className="text-slate-400 mb-1" />
                            <span className="text-xs font-medium text-slate-700">{apartment.bathrooms} Bath</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center border-l border-slate-100">
                            <Maximize size={16} className="text-slate-400 mb-1" />
                            <span className="text-xs font-medium text-slate-700">{apartment.size} m²</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-slate-400">Mulai dari</p>
                            <p className="text-[var(--color-primary)] font-bold text-lg">
                                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 3 }).format(apartment.priceRaw)}
                                <span className="text-xs text-slate-500 font-normal"> / bln</span>
                            </p>
                        </div>
                        {/* <Button size="sm" variant="outline">Detail</Button> */}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
