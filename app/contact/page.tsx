import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-32 pb-20 container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-12 text-center text-slate-900">Hubungi Kami</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 h-fit">
                        <h3 className="text-2xl font-bold mb-6 text-slate-900">Informasi Kontak</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-[var(--color-primary)]">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Telepon / WhatsApp</p>
                                    <p className="text-slate-600">+62 812 3456 7890</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-[var(--color-primary)]">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Email</p>
                                    <p className="text-slate-600">hello@apartemen360.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-[var(--color-primary)]">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Kantor Pusat</p>
                                    <p className="text-slate-600">Jl. Sudirman No. 123, Jakarta Selatan<br />DKI Jakarta 12190</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] outline-none" placeholder="Masukkan nama Anda" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] outline-none" placeholder="alamat@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Pesan</label>
                                <textarea className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] outline-none h-32" placeholder="Tulis pesan Anda..." ></textarea>
                            </div>
                            <Button size="lg" className="w-full">Kirim Pesan</Button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
