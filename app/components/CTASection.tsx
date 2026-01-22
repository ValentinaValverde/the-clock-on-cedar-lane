export default function CTASection() {
  return (
    <div className="bg-light-green px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm md:text-base text-black mb-4">Craving already?</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-black leading-tight genty">
          Order online – we&apos;ll
          <br className="hidden md:block" />
          take care of the rest.
        </h2>
        <a
          href="/order"
          className="inline-block mt-8 rounded-full bg-dark-green px-8 py-3 text-light-green"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}
