import Image from 'next/image';
import CheckeredPattern from './CheckeredPattern';

const PLACEHOLDER_IMAGE =
  'https://images.pexels.com/photos/12540668/pexels-photo-12540668.png';

export default function Hero() {
  return (
    <section className="bg-dark-green ">
      <header className="px-6 py-12 text-center h-[80vh] flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-6xl text-light-green">
          The Clock
          <br />
          on Cedar Lane
        </h1>
        <p className="mt-4 text-light-green">Food that tastes like home.</p>
      </header>

      <CheckeredPattern rows={2} cols={24} />

      {/* <figure className="grid grid-cols-2 md:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Image
            key={index}
            src={PLACEHOLDER_IMAGE}
            alt="Delicious food from The Clock on Cedar Lane"
            width={300}
            height={300}
            className="aspect-square w-full object-cover"
          />
        ))}
      </figure> */}
    </section>
  );
}
