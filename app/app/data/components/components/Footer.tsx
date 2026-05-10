import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-white">
      <div className="container-luxury py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl tracking-[0.2em]">RAHÉ</h2>
            <p className="mt-2 text-sm tracking-[0.3em] text-taupe">راحة</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-taupe">
              Comfort in Modesty. Modern modest wear crafted with elegance,
              serenity, and timeless design.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">
              Shop
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-taupe">
              <li>
                <Link href="/collections/mens-thobes-kurtas">Men’s Thobes</Link>
              </li>
              <li>
                <Link href="/collections/womens-abayas">Women’s Abayas</Link>
              </li>
              <li>
                <Link href="/collections/hijabs">Hijabs</Link>
              </li>
              <li>
                <Link href="/collections/signature-fragrances">Fragrances</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-taupe">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-black/5 pt-8 text-sm text-taupe">
          © {new Date().getFullYear()} RAHÉ. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
