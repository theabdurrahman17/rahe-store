import Link from "next/link";
import { Heart } from "lucide-react";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product
}: ProductCardProps) {
  return (
    <div className="card-luxury overflow-hidden transition duration-300 hover:-translate-y-1">
      {/* Product Visual */}
      <Link href={`/product/${product.slug}`}>
        <div className="aspect-[4/5] bg-sand p-8">
          <div className="flex h-full items-center justify-center text-center">
            <div>
              <p className="font-serif text-2xl md:text-3xl">
                {product.name}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-taupe">
                RAHÉ
              </p>
            </div>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link
              href={`/product/${product.slug}`}
              className="font-serif text-2xl leading-tight hover:text-taupe"
            >
              {product.name}
            </Link>

            <p className="mt-3 text-sm text-taupe line-clamp-2">
              {product.description}
            </p>
          </div>

          <button
            className="rounded-full p-2 hover:bg-black/5"
            aria-label="Add to wishlist"
          >
            <Heart size={18} />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-lg font-medium">
            LKR {product.price.toLocaleString()}
          </p>

          <Link
            href={`/product/${product.slug}`}
            className="btn-secondary px-5 py-2"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
