import { useMemo, useState } from "react";

export type ProductCategory = 'monitors' | 'pcs' | 'peripherals' | 'deals' | 'refurbished';

type CartItem = {
    id: string;
    quantity: number;
}

type CartProduct = Product & {
    quantity: number;
}

export type Product = {
    id: string;
    category: ProductCategory;
    name: string;
    price: number;
    description: string;
    specs: string[];
    stock: number;
    badge?: string;
    imageUrls: string[];
    originalCategory?: ProductCategory; // For refurbished items
  };

export const categoryMetadata: Record<ProductCategory, { title: string; description: string; route: string }> = {
  monitors: {
    title: 'Monitors',
    description: 'Crystal-clear displays, fast refresh rates, and ergonomic design for every workspace and gaming setup.',
    route: '/monitors',
  },
  pcs: {
    title: 'PCs',
    description: 'Custom-built desktops optimized for productivity, streaming, gaming, and creative workflows.',
    route: '/pcs',
  },
  peripherals: {
    title: 'Peripherals',
    description: 'High-precision keyboards, mice, headsets, and accessories to complete your build.',
    route: '/peripherals',
  },
  deals: {
    title: 'Deals',
    description: 'Limited-time bundles, bundle savings, and hot stock for fast-moving electronics shoppers.',
    route: '/deals',
  },
  refurbished: {
    title: 'Refurbished',
    description: 'Certified pre-owned electronics restored to like-new condition with full warranty and significant savings.',
    route: '/refurbished',
  },
};

export const products: Product[] = [
  {
    id: 'flux-320qhd',
    category: 'monitors',
    name: 'Flux 32" QHD',
    price: 150000000, // ₦150,000,000 (equivalent to ~$100,000 USD)
    description: 'Gigantic contrast, 170Hz refresh, and pro-grade color uniformity for creators and competitive players.',
    specs: ['QHD 2560x1440', '170Hz', '1ms MPRT', 'HDR400', 'G-Sync Compatible'],
    stock: 14,
    badge: 'Best Seller',
    imageUrls: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop'
    ],
  },
  {
    id: 'nova-240c',
    category: 'monitors',
    name: 'Nova 24" IPS',
    price: 500000,
    description: 'Compact designer screen with punchy color, low-blue light mode, and clean USB-C docking support.',
    specs: ['1080p', '144Hz', 'IPS', 'USB-C', 'Height Adjustable'],
    stock: 22,
    imageUrls: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'
    ],
  },
  {
    id: 'ultra-34w',
    category: 'monitors',
    name: 'UltraWide 34" Curved',
    price: 2600000,
    description: 'Immersive curved display for multitasking, editing, and cinematic gaming with wide color coverage.',
    specs: ['3440x1440', '100Hz', 'UltraWide', 'VA Panel', 'HDR'],
    stock: 8,
    imageUrls: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=600&fit=crop'
    ],
  },
  {
    id: 'storm-v2',
    category: 'pcs',
    name: 'Storm V2 Gaming PC',
    price: 2698500, // ₦2,698,500 (equivalent to $1,799 USD)
    description: 'AMD Ryzen 7 and RTX 4070 combine with custom cooling for high-frame-rate desktop performance.',
    specs: ['Ryzen 7 7800X3D', 'RTX 4070', '32GB DDR5', '1TB NVMe', '750W Gold'],
    stock: 6,
    badge: 'In Stock',
    imageUrls: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=600&fit=crop'
    ],
  },
  {
    id: 'build-core',
    category: 'pcs',
    name: 'Build Core Workstation',
    price: 2398500, // ₦2,398,500 (equivalent to $1,599 USD)
    description: 'A professional workstation with multi-task horsepower, video editing performance, and stable reliability.',
    specs: ['Core i7-14700F', 'RTX 4060 Ti', '32GB DDR5', '1TB NVMe', 'Liquid Cooled'],
    stock: 5,
    imageUrls: [
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop'
    ],
  },
  {
    id: 'neon-mini',
    category: 'pcs',
    name: 'Neon Mini Compact',
    price: 1873500, // ₦1,873,500 (equivalent to $1,249 USD)
    description: 'Small form-factor power without compromise, curated for streamers and creative desks with style.',
    specs: ['Ryzen 7 7800X', 'RTX 4060', '32GB DDR5', '1TB SSD', 'Mini-ITX'],
    stock: 11,
    imageUrls: [
      'https://images.unsplash.com/photo-1629905917981-5a01ba3f3d58?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1629905917981-5a01ba3f3d58?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1629905917981-5a01ba3f3d58?w=800&h=600&fit=crop'
    ],
  },
  {
    id: 'arc-elite',
    category: 'peripherals',
    name: 'Arc Elite Keyboard',
    price: 238500, // ₦238,500 (equivalent to $159 USD)
    description: 'Mechanical switches, full RGB, and macro-ready controls for both work and play.',
    specs: ['Hot-swappable', 'RGB', 'PBT Keycaps', 'Wireless', 'Software'],
    stock: 32,
    imageUrls: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=600&fit=crop'
    ],
  },
  {
    id: 'pulse-pro',
    category: 'peripherals',
    name: 'Pulse Pro Headset',
    price: 193500, // ₦193,500 (equivalent to $129 USD)
    description: 'Surround sound audio with dual-microphone clarity and comfort for marathon sessions.',
    specs: ['7.1 Audio', 'Noise Cancel', 'Memory Foam', 'Detachable Mic', 'RGB'],
    stock: 19,
    badge: 'Fast Ship',
    imageUrls: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop'
    ],
  },
  {
    id: 'vector-x',
    category: 'peripherals',
    name: 'Vector X Mouse',
    price: 133500, // ₦133,500 (equivalent to $89 USD)
    description: 'Ultra-light sensor, custom lift-off settings, and durable switches built for esports accuracy.',
    specs: ['6500 DPI', 'Ultra-Light', 'PTFE Feet', 'RGB', 'Wireless'],
    stock: 41,
    imageUrls: [
      'https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&h=600&fit=crop'
    ],
  },
  {
    id: 'deal-trio',
    category: 'deals',
    name: 'Hero Bundle',
    price: 1948500, // ₦1,948,500 (equivalent to $1,299 USD)
    description: 'Monitor + keyboard + mouse bundle package with instant savings for desktop upgrades.',
    specs: ['32" QHD Monitor', 'Mechanical Keyboard', 'Performance Mouse', 'Free Shipping'],
    stock: 9,
    badge: 'Bundle Save',
    imageUrls: [
      'https://images.unsplash.com/photo-1537498425046-c53400bb353d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1537498425046-c53400bb353d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1537498425046-c53400bb353d?w=800&h=600&fit=crop'
    ],
  },
  {
    id: 'deal-stream',
    category: 'deals',
    name: 'Stream Ready Kit',
    price: 748500, // ₦748,500 (equivalent to $499 USD)
    description: 'Headset, webcam, and capture peripheral pack with fast shipping for live creators.',
    specs: ['HD Webcam', 'Headset', 'Stream Deck Mini', '3 USB Cables'],
    stock: 14,
    imageUrls: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=600&fit=crop'
    ],
  },
  {
    id: 'deal-upgrade',
    category: 'deals',
    name: 'Workspace Upgrade',
    price: 279,
    description: 'Desk kit with ergonomic accessories, RGB lighting strip, and cable management essentials.',
    specs: ['Desk Mat', 'LED Strip', 'Cable Kit', 'Monitor Arm', 'USB Hub'],
    stock: 23,
    imageUrls: [
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop'
    ],
  },
  {
    id: 'refurb-storm',
    category: 'refurbished',
    name: 'Refurbished Storm V2',
    price: 1399,
    description: 'Certified refurbished gaming PC with full stress testing and 1-year warranty.',
    specs: ['Ryzen 7 7800X3D', 'RTX 4070', '32GB DDR5', '1TB NVMe', '750W Gold'],
    stock: 4,
    badge: 'Refurbished',
    originalCategory: 'pcs',
    imageUrls: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=600&fit=crop'
    ],
  },
  {
    id: 'Hp Monitor Refurb',
    category: 'refurbished',
    name: 'HP V24i FHD Monitor with Table Mount',
    price: 245000,
    description: 'Certified refurbished 24-inch FHD monitor with IPS panel and adjustable table mount.',
    specs: ['24" FHD (1920x1080)', 'IPS Panel', '75Hz Refresh Rate', 'HDMI + VGA Ports', 'Tilt Adjustment','Includes Table Mount'],
    stock: 7,
    badge: 'Refurbished',
    originalCategory: 'monitors',
    imageUrls: [
      'images/IMG_20260512_095316_355 (1).jpg',
      'images/IMG_20260512_095316_355 (2).jpg',
      'images/IMG_20260512_095316_355 (3).jpg'
    ],
  },
];


export default function Cart() {
    const [items, setItems] = useState<CartItem[]>([])
    const CartProducts = useMemo(()=> {
        items.map((item) => {
            const product = products.find((p)=> p.id === item.id)
            return product ? {...product, quantity: item.quantity} : null
        }).filter((item): item is CartProduct => item !== null)
    },[items,products])
}
