import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import {
  categories,
  getProductsByCategory
} from "@/data/products";

type CollectionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CollectionPage({
  params
}: CollectionPageProps) {
  const { slug } = await params;

  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(slug);

  return (
    <div className="container-luxury py-16 md:py-24">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-taupe">
          Collection
        </p>

        <h1 className="mt-4 font-serif text-4xl font-semibold md:text-6xl">
          {category.name}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-taupe">
          {category.description}
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-taupe">
            No products found in this collection.
          </div>
        )}
      </div>
    </div>
  );
}
