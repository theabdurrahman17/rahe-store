import { notFound } from "next/navigation";
import Link from "next/link";
import { Heart, Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import { getProductBySlug } from "@/data/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({
  params
}: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container-luxury py-16 md:py-24">
      {/* Breadcrumb */}
      <nav className="mb-10 text-sm text-taupe">
        <Link href="/">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/collections/${product.category}`}>Collection</Link>
        <span className="mx-2">/</span>
        <span className="text-charcoal">{product.name}</span>
      </nav>

      {/* Product Layout */}
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Product Visual */}
        <div className="card-luxury overflow-hidden">
          <div className="aspect-[4/5] bg-sand p-10">
            <div className="flex h-full items-center justify-center text-center">
              <div>
                <p className="font-serif text-4xl md:text-5xl">
                  {product.name}
                </p>
                <p className="mt-4 uppercase tracking-[0.35em] text-taupe text-sm">
                  RAHÉ
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div>
          <div className="text-sm uppercase tracking-[0.35em] text-taupe">
            {product.category.replace(/-/g, " ")}
          </div>

          <h1 className="mt-4 font-serif text-4xl md:text-5xl font-semibold">
            {product.name}
          </h1>

          <p className="mt-6 text-3xl font-medium">
            LKR {product.price.toLocaleString()}
          </p>

          <p className="mt-6 leading-8 text-taupe">
            {product.description}
          </p>

          {/* Quantity Selector */}
          <div className="mt-8">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em]">
              Quantity
            </p>

            <div className="inline-flex items-center rounded-full border border-black/10 bg-white">
              <button className="p-4" aria-label="Decrease quantity">
                <Minus size={18} />
              </button>

              <span className="min-w-12 text-center">1</span>

              <button className="p-4" aria-label="Increase quantity">
                <Plus size={18} />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="btn-primary flex-1">
              Add to Cart
            </button>

            <button
              className="btn-secondary px-5"
              aria-label="Add to wishlist"
            >
              <Heart size={18} />
            </button>
          </div>

          {/* Trust Features */}
          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3 text-sm text-taupe">
              <Truck size={18} />
              Worldwide shipping with tracking.
            </div>

            <div className="flex items-center gap-3 text-sm text-taupe">
              <ShieldCheck size={18} />
              Secure checkout ready for PayHere integration.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
