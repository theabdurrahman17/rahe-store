export default function ContactPage() {
  return (
    <div className="container-luxury py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-taupe">
          Contact
        </p>

        <h1 className="mt-4 font-serif text-4xl font-semibold md:text-6xl">
          We’d Love to Hear From You
        </h1>

        <p className="mt-8 text-lg leading-8 text-taupe">
          Reach out for product inquiries, sizing guidance, partnerships, or
          customer support.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        <div className="card-luxury p-10 md:p-14">
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                className="w-full rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-charcoal"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                className="w-full rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-charcoal"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                rows={6}
                className="w-full rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-charcoal"
                placeholder="How can we help?"
              />
            </div>

            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
