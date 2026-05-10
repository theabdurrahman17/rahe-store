import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import {
  categories,
  getFeaturedProducts,
  getBestSellers
} from "@/data/products";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const bestSellers = getBestSellers();

  return (
    <div>
      {/* Hero Section */}
      <section className="container-luxury py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-taupe">
            Modern Modest Wear
          </p>

          <h1 className="mt-6 font-serif text-5xl font-semibold leading-tight md:text-7xl">
            Comfort in Modesty
          </h1>

          <p className="mt-8 text-lg leading-8 text-taupe md:text-xl">
            RAHÉ (راحة) presents premium thobes, abayas, hijabs, and
            signature fragrances crafted with timeless elegance.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/collections/mens-thobes-kurtas" className="btn-primary">
              Shop Collection
            </Link>

            <Link href="/about" className="btn-secondary">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="container-luxury py-20">
        <div className="text-center">
          <h2 className="section-title">Featured Collections</h2>
          <p className="section-subtitle mx-auto">
            Thoughtfully curated categories designed for every expression of modest living.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/collections/${category.slug}`}
              className="card-luxury p-8 transition hover:-translate-y-1"
            >
              <h3 className="font-serif text-3xl">{category.name}</h3>
              <p className="mt-4 text-sm leading-7 text-taupe">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container-luxury py-20">
        <div className="text-center">
          <h2 className="section-title">Best Sellers</h2>
          <p className="section-subtitle mx-auto">
            Our most-loved pieces and signature fragrances.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="container-luxury py-20">
        <div className="card-luxury p-10 md:p-16 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-taupe">
            Our Philosophy
          </p>

          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Serenity Through Design
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-taupe">
            Inspired by the Arabic word for comfort and tranquility, RAHÉ creates
            garments and fragrances that combine traditional values with modern
            sophistication.
          </p>
        </div>
      </section>
    </div>
  );
}
