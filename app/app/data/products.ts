export type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  image: string;
  description: string;
  featured?: boolean;
  bestSeller?: boolean;
};

export const categories = [
  {
    name: "Men’s Thobes & Kurtas",
    slug: "mens-thobes-kurtas",
    description: "Tailored garments crafted for timeless elegance and daily comfort."
  },
  {
    name: "Women’s Abayas",
    slug: "womens-abayas",
    description: "Graceful silhouettes designed with refined modesty."
  },
  {
    name: "Hijabs",
    slug: "hijabs",
    description: "Soft premium fabrics in versatile shades for every occasion."
  },
  {
    name: "Signature Fragrances",
    slug: "signature-fragrances",
    description: "Distinctive scents inspired by serenity and sophistication."
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: "Noor Premium Thobe",
    slug: "noor-premium-thobe",
    category: "mens-thobes-kurtas",
    price: 15990,
    image: "/placeholder.txt",
    description:
      "A refined premium thobe crafted with breathable fabric and impeccable tailoring.",
    featured: true,
    bestSeller: true
  },
  {
    id: 2,
    name: "Safa Linen Kurta",
    slug: "safa-linen-kurta",
    category: "mens-thobes-kurtas",
    price: 12990,
    image: "/placeholder.txt",
    description:
      "Lightweight linen blend kurta designed for comfort and understated luxury.",
    featured: true
  },
  {
    id: 3,
    name: "Layali Signature Abaya",
    slug: "layali-signature-abaya",
    category: "womens-abayas",
    price: 18990,
    image: "/placeholder.txt",
    description:
      "Flowing abaya with elegant drape and premium finishing details.",
    featured: true,
    bestSeller: true
  },
  {
    id: 4,
    name: "Silk Modal Hijab",
    slug: "silk-modal-hijab",
    category: "hijabs",
    price: 4990,
    image: "/placeholder.txt",
    description:
      "Ultra-soft modal hijab with graceful texture and effortless styling.",
    featured: true
  },
  {
    id: 5,
    name: "Raha Oud",
    slug: "raha-oud",
    category: "signature-fragrances",
    price: 8990,
    image: "/placeholder.txt",
    description:
      "A warm and sophisticated fragrance with rich oud and amber accords.",
    bestSeller: true
  },
  {
    id: 6,
    name: "Misk Serenity",
    slug: "misk-serenity",
    category: "signature-fragrances",
    price: 7990,
    image: "/placeholder.txt",
    description:
      "A clean musk fragrance inspired by tranquility and modern elegance.",
    bestSeller: true
  },
  {
    id: 7,
    name: "Nura Everyday Abaya",
    slug: "nura-everyday-abaya",
    category: "womens-abayas",
    price: 14990,
    image: "/placeholder.txt",
    description:
      "An everyday abaya balancing practicality with elevated design."
  },
  {
    id: 8,
    name: "Essential Chiffon Hijab",
    slug: "essential-chiffon-hijab",
    category: "hijabs",
    price: 3990,
    image: "/placeholder.txt",
    description:
      "Lightweight chiffon hijab offering elegant movement and versatility."
  }
];

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getBestSellers() {
  return products.filter((product) => product.bestSeller);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((product) => product.category === categorySlug);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
