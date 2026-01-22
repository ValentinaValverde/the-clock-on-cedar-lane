import Image from 'next/image';

export default function Hero() {
  return (
    <div className="w-[80bw] p-24 text-center flex flex-col justify-center items-center gap-8 mt-24">
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-black genty">
        We make old school look cool.
      </h2>

      <p className="max-w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. 
      </p>

      <Image
        src="https://images.pexels.com/photos/12540668/pexels-photo-12540668.png"
        alt="Delicious food from The Clock on Cedar Lane"
        width={300}
        height={300}
        // className="aspect-square w-full object-cover rounded-lg border border-dark-green"
        className="w-full h-[400px] object-cover rounded-lg border border-dark-green mt-24"
      />
    </div>
  );
}
