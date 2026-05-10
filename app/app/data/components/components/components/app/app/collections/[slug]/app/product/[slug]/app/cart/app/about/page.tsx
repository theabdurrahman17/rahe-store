import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container-luxury py-16 md:py-24">
      {/* Hero */}
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-taupe">
          About RAHÉ
        </p>

        <h1 className="mt-4 font-serif text-4xl font-semibold md:text-6xl">
          Comfort in Modesty
        </h1>

        <p className="mt-8 text-lg leading-8 text-taupe">
          RAHÉ (راحة) is inspired by the concept of tranquility, dignity, and
          timeless elegance. We create premium modest wear for individuals who
          value quality craftsmanship and sophisticated simplicity.
        </p>
      </div>

      {/* Story */}
      <div className="mx-auto mt-16 max-w-4xl">
        <div className="card-luxury p-10 md:p-14">
          <h2 className="font-serif text-3xl md:text-4xl">
            Our Philosophy
          </h2>

          <p className="mt-6 leading-8 text-taupe">
            Our mission is to blend tradition with modern design, offering
            garments and fragrances that embody serenity and confidence.
          </p>

          <p className="mt-4 leading-8 text-taupe">
            Each collection is thoughtfully curated to deliver comfort,
            durability, and understated luxury.
          </p>

          <p className="mt-4 leading-8 text-taupe">
            From tailored thobes and flowing abayas to soft hijabs and signature
            fragrances, every detail is crafted to elevate everyday life.
          </p>

          <Link href="/" className="btn-primary mt-8">
            Explore Collections
          </Link>
        </div>
      </div>
    </div>
  );
}
