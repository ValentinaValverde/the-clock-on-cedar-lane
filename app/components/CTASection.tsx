export default function CTASection() {
  return (
    <section className="bg-light-green px-6 py-16 md:py-24">
      <article className="max-w-3xl mx-auto text-center">
        <p className="text-sm md:text-base text-black mb-4">
          Craving already?
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-black leading-tight">
          Order{' '}
          <em className="italic underline decoration-2 underline-offset-4">
            online
          </em>{' '}
          – we&apos;ll
          <br className="hidden md:block" />
          take care of the rest.
        </h2>
        <a
          href="/order"
          className="inline-block mt-8 rounded-full bg-dark-green px-8 py-3 text-light-green font-medium transition-opacity hover:opacity-90"
        >
          Order Now
        </a>
      </article>
    </section>
  );
}
