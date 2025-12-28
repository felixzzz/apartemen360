export interface Apartment {
    id: string;
    title: string;
    location: string;
    priceRaw: number;
    price: string;
    type: string;
    bedrooms: number;
    bathrooms: number;
    size: number;
    image: string;
    isVerified: boolean;
    has360: boolean;
    tags?: string[];
    gallery: string[];
}

export const APARTMENTS: Apartment[] = [
    {
        id: '1',
        title: 'Modern Loft at Sudirman Suites',
        location: 'Jakarta Pusat, DKI Jakarta',
        priceRaw: 15000000,
        price: 'Rp 15.000.000 / bulan',
        type: '2BR',
        bedrooms: 2,
        bathrooms: 1,
        size: 72,
        image: '/images/hero-apartment.png',
        isVerified: true,
        has360: true,
        tags: ['Best Value', 'Near MRT'],
        gallery: [
            '/images/hero-apartment.png',
            '/images/kitchen-detail.png',
            '/images/bathroom-detail.png'
        ]
    },
    {
        id: '2',
        title: 'Luxury Penthouse Kuningan',
        location: 'Kuningan, Jakarta Selatan',
        priceRaw: 45000000,
        price: 'Rp 45.000.000 / bulan',
        type: '3BR',
        bedrooms: 3,
        bathrooms: 2,
        size: 145,
        image: '/images/penthouse-living.png',
        isVerified: true,
        has360: true,
        tags: ['Luxury', 'City View'],
        gallery: [
            '/images/penthouse-living.png',
            '/images/kitchen-detail.png',
            '/images/bathroom-detail.png'
        ]
    },
    {
        id: '3',
        title: 'Cozy Studio in BSD City',
        location: 'BSD City, Tangerang',
        priceRaw: 5000000,
        price: 'Rp 5.000.000 / bulan',
        type: 'Studio',
        bedrooms: 1,
        bathrooms: 1,
        size: 32,
        image: '/images/studio-living.png',
        isVerified: true,
        has360: false,
        tags: ['New', 'Student Friendly'],
        gallery: [
            '/images/studio-living.png',
            '/images/kitchen-detail.png',
            '/images/bathroom-detail.png'
        ]
    },
    {
        id: '4',
        title: 'Family Apartment in Kemang',
        location: 'Kemang, Jakarta Selatan',
        priceRaw: 22000000,
        price: 'Rp 22.000.000 / bulan',
        type: '2BR',
        bedrooms: 2,
        bathrooms: 2,
        size: 98,
        image: '/images/family-living.png',
        isVerified: true,
        has360: true,
        tags: ['Green Area', 'Pet Friendly'],
        gallery: [
            '/images/family-living.png',
            '/images/kitchen-detail.png',
            '/images/bathroom-detail.png'
        ]
    }
];
