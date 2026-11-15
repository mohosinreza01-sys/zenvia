
export type Property = {
    id: number;
    title: string;
    location: string;
    price: number;
    priceLabel: string;
    type: string;
    category: "Sale" | "Rent";
    beds: number;
    baths: number;
    area: number;
    image: string;
    images: string[];
    featured?: boolean;
    description: string;
    features: string[];
    address: string;
    yearBuilt: number;
    propertyId: string;
    agent: {
        name: string;
        role: string;
        phone: string;
        email: string;
        image: string;
    };
};

export const properties: Property[] = [
    {
        id: 1,
        title: "Modern Luxury Apartment",
        location: "Gulshan 2, Dhaka",
        price: 18500000,
        priceLabel: "৳1.85 Crore",
        type: "Apartment",
        category: "Sale",
        beds: 3,
        baths: 3,
        area: 1850,
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
        images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400",
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1400",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1400",
        ],
        featured: true,
        description:
            "Experience comfortable city living in this beautifully designed modern apartment. Featuring spacious interiors, elegant finishes and thoughtfully planned living spaces, this home offers a welcoming environment in one of Dhaka's desirable residential locations.",
        features: [
            "Modern kitchen",
            "Attached bathrooms",
            "Dedicated parking",
            "24/7 security",
            "Elevator access",
            "Balcony",
            "Generator backup",
            "Community space",
        ],
        address: "Gulshan 2, Dhaka, Bangladesh",
        yearBuilt: 2022,
        propertyId: "ZNV-001",
        agent: {
            name: "James Wilson",
            role: "Senior Property Consultant",
            phone: "+8801XXXXXXXXX",
            email: "agent@yourdomain.com",
            image: "https://i.pravatar.cc/300?img=12",
        },
    },
    {
        id: 2,
        title: "Elegant Family Residence",
        location: "Banani, Dhaka",
        price: 125000,
        priceLabel: "৳1,25,000 / month",
        type: "Apartment",
        category: "Rent",
        beds: 3,
        baths: 3,
        area: 1650,
        image:
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200",
        images: [
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1400",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1400",
            "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1400",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400",
        ],
        description:
            "A comfortable family residence with a practical layout, generous living spaces and a convenient location. Ideal for families looking for a well-connected home in Banani.",
        features: [
            "Fitted kitchen",
            "Three bedrooms",
            "Three bathrooms",
            "Balcony",
            "Lift facility",
            "Security service",
            "Parking space",
            "Nearby shopping",
        ],
        address: "Banani, Dhaka, Bangladesh",
        yearBuilt: 2021,
        propertyId: "ZNV-002",
        agent: {
            name: "James Wilson",
            role: "Senior Property Consultant",
            phone: "+8801XXXXXXXXX",
            email: "agent@yourdomain.com",
            image: "https://i.pravatar.cc/300?img=12",
        },
    },
    {
        id: 3,
        title: "Contemporary Private Villa",
        location: "Bashundhara, Dhaka",
        price: 32000000,
        priceLabel: "৳3.2 Crore",
        type: "Villa",
        category: "Sale",
        beds: 4,
        baths: 4,
        area: 3200,
        image:
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
        images: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1400",
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1400",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400",
        ],
        featured: true,
        description:
            "Discover a spacious contemporary villa designed for modern family living. This property combines generous indoor spaces with a refined architectural style and a peaceful residential setting.",
        features: [
            "Private garden",
            "Modern kitchen",
            "Four bedrooms",
            "Four bathrooms",
            "Private parking",
            "Terrace",
            "Security system",
            "Spacious living room",
        ],
        address: "Bashundhara Residential Area, Dhaka, Bangladesh",
        yearBuilt: 2023,
        propertyId: "ZNV-003",
        agent: {
            name: "James Wilson",
            role: "Senior Property Consultant",
            phone: "+8801XXXXXXXXX",
            email: "agent@yourdomain.com",
            image: "https://i.pravatar.cc/300?img=12",
        },
    },
    {
        id: 4,
        title: "Minimal Urban Apartment",
        location: "Dhanmondi, Dhaka",
        price: 85000,
        priceLabel: "৳85,000 / month",
        type: "Apartment",
        category: "Rent",
        beds: 2,
        baths: 2,
        area: 1250,
        image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
        images: [
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1400",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400",
        ],
        description:
            "A thoughtfully planned urban apartment with clean interiors and a functional layout. A practical choice for anyone seeking a comfortable home in Dhanmondi.",
        features: [
            "Two bedrooms",
            "Two bathrooms",
            "Modern kitchen",
            "Balcony",
            "Lift facility",
            "Security service",
            "Parking available",
            "Nearby amenities",
        ],
        address: "Dhanmondi, Dhaka, Bangladesh",
        yearBuilt: 2020,
        propertyId: "ZNV-004",
        agent: {
            name: "James Wilson",
            role: "Senior Property Consultant",
            phone: "+8801XXXXXXXXX",
            email: "agent@yourdomain.com",
            image: "https://i.pravatar.cc/300?img=12",
        },
    },
    {
        id: 5,
        title: "Premium Modern House",
        location: "Uttara, Dhaka",
        price: 24500000,
        priceLabel: "৳2.45 Crore",
        type: "House",
        category: "Sale",
        beds: 4,
        baths: 4,
        area: 2800,
        image:
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200",
        images: [
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1400",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1400",
            "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1400",
        ],
        description:
            "A premium family home with spacious rooms and a modern design approach. Enjoy a comfortable residential environment with convenient access to everyday facilities.",
        features: [
            "Four bedrooms",
            "Four bathrooms",
            "Modern kitchen",
            "Family lounge",
            "Parking space",
            "Balcony",
            "Security system",
            "Rooftop access",
        ],
        address: "Uttara, Dhaka, Bangladesh",
        yearBuilt: 2022,
        propertyId: "ZNV-005",
        agent: {
            name: "James Wilson",
            role: "Senior Property Consultant",
            phone: "+8801XXXXXXXXX",
            email: "agent@yourdomain.com",
            image: "https://i.pravatar.cc/300?img=12",
        },
    },
    {
        id: 6,
        title: "Cozy City Residence",
        location: "Mirpur, Dhaka",
        price: 45000,
        priceLabel: "৳45,000 / month",
        type: "Apartment",
        category: "Rent",
        beds: 2,
        baths: 2,
        area: 1050,
        image:
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200",
        images: [
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1400",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1400",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400",
        ],
        description:
            "A cozy and functional apartment designed for convenient everyday living. Its practical layout makes it a suitable option for small families and professionals.",
        features: [
            "Two bedrooms",
            "Two bathrooms",
            "Kitchen",
            "Balcony",
            "Lift facility",
            "Security service",
            "Nearby transport",
            "Shopping nearby",
        ],
        address: "Mirpur, Dhaka, Bangladesh",
        yearBuilt: 2019,
        propertyId: "ZNV-006",
        agent: {
            name: "James Wilson",
            role: "Senior Property Consultant",
            phone: "+8801XXXXXXXXX",
            email: "agent@yourdomain.com",
            image: "https://i.pravatar.cc/300?img=12",
        },
    },
];
