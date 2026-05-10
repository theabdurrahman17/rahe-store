"use client";

import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/collections/mens-thobes-kurtas" },
  { name: "Women", href: "/collections/womens-abayas" },
  { name: "Hijabs", href: "/collections/hijabs" },
  { name: "Fragrances", href: "/collections/signature-fragrances" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-ivory/95 backdrop-blur">
      <div className="container-luxury">
        <div className="relative flex h-20 items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full p-2 hover:bg-black/5 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link href="/" className="text-center">
            <div className="font-serif text-3xl font-semibold tracking-[0.25em]">
              RAHÉ
            </div>
            <div className="text-xs tracking-[0.3em] text-taupe">راحة</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden absolute left-1/2 -translate-x-1/2 md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-wide text-charcoal transition hover:text-taupe"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <button
              className="rounded-full p-2 hover:bg-black/5"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              className="rounded-full p-2 hover:bg-black/5"
              aria-label="Wishlist"
            >
              <Heart size={20} />
            </button>
            <button
              className="rounded-full p-2 hover:bg-black/5"
              aria-label="Account"
            >
              <User size={20} />
            </button>
            <Link
              href="/cart"
              className="rounded-full p-2 hover:bg-black/5"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <nav className="border-t border-black/5 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm tracking-wide text-charcoal"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
