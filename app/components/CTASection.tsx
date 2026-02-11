export default function CTASection() {
  return (
    <div className="bg-light-green px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center ">
        <p className="text-sm md:text-base text-black mb-8">
          Drooling already?
        </p>
        <h2 className="text-5xl lg:text-6xl text-black genty">
          Order online – we&apos;ll <br className="hidden md:block" />
          take care of the rest.
        </h2>
        <a
          href="https://www.doordash.com/store/the-clock-on-cedar-lane-greenville-35390345/75875347/"
          className="inline-block mt-8 rounded-full px-8 py-3 text-light-green bg-dark-green hover:bg-black transition duration-300"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}
