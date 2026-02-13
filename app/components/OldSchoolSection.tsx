import Image from 'next/image';

export default function Hero() {
  return (
    <div className="w-full pb-24 pt-48 flex flex-col justify-center items-center">
      <div className="w-3/4  text-center flex flex-col items-center gap-8 ">
        <h2 className="text-5xl lg:text-6xl text-black genty">
          We make old school look cool.
        </h2>

        <p className="sm:max-w-1/2">
          Good food brings people together. Whether you’re here for a quick bite or a long catch-up, every plate is made to be shared, remembered, and ordered again.
        </p>

        <Image
          src="/the-clock-on-cedar.jpg"
          alt="Delicious food from The Clock on Cedar Lane"
          width={300}
          height={300}
          // className="aspect-square w-full object-cover rounded-lg border border-dark-green"
          className="w-full h-[600px] object-cover rounded-lg border border-dark-green mt-24"
        />
      </div>
    </div>
  );
}
