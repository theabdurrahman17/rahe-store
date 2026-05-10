import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: "Noor Premium Thobe",
      price: 15990,
      quantity: 1
    },
    {
      id: 4,
      name: "Silk Modal Hijab",
      price: 4990,
      quantity: 2
    }
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = 1500;
  const total = subtotal + shipping;

  return (
    <div className="container-luxury py-16 md:py-24">
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-taupe">
          Shopping Cart
        </p>
        <h1 className="mt-4 font-serif text-4xl font-semibold md:text-6xl">
          Your Cart
        </h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="card-luxury p-16 text-center">
          <ShoppingBag className="mx-auto mb-6" size={48} />
          <h2 className="font-serif text-3xl">Your cart is empty</h2>
          <p className="mt-4 text-taupe">
            Discover timeless pieces crafted for modern modest living.
          </p>
          <Link href="/" className="btn-primary mt-8">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="space-y-6 lg:col-span-2">
            {cartItems.map((item) => (
              <div key={item.id} className="card-luxury p-6">
                <div className="flex items-center gap-6">
                  <div className="h-24 w-20 rounded-2xl bg-sand" />

                  <div className="flex-1">
                    <h3 className="font-serif text-2xl">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-taupe">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <div className="text-right font-medium">
                    LKR {(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="card-luxury h-fit p-8">
            <h2 className="font-serif text-3xl">
              Order Summary
            </h2>

            <div className="mt-8 space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-taupe">Subtotal</span>
                <span>LKR {subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-taupe">Shipping</span>
                <span>LKR {shipping.toLocaleString()}</span>
              </div>

              <div className="border-t border-black/5 pt-4 flex justify-between text-lg font-medium">
                <span>Total</span>
                <span>LKR {total.toLocaleString()}</span>
              </div>
            </div>

            <button className="btn-primary mt-8 w-full">
              Proceed to Checkout
            </button>

            <p className="mt-4 text-center text-xs text-taupe">
              Secure checkout ready for PayHere integration.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
