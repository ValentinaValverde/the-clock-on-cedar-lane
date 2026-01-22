import Image from 'next/image';

const PLACEHOLDER_IMAGE =
  'https://images.pexels.com/photos/12540668/pexels-photo-12540668.png';

export default function ImageSection() {
  return (
    <div
      className="w-full flex justify-center py-24 
    bg-[linear-gradient(to_bottom,var(--light-green)_0%,var(--light-green)_50%,var(--dark-green)_50%,var(--dark-green)_100%)]"
    >
      <figure className="w-3/4 grid grid-cols-2 md:grid-cols-3 gap-8">
        {Array.from({ length: 9 }).map((_, index) => (
          <Image
            key={index}
            src={PLACEHOLDER_IMAGE}
            alt="Delicious food from The Clock on Cedar Lane"
            width={300}
            height={300}
            className="aspect-square w-full object-cover rounded-lg border border-dark-green"
          />
        ))}
      </figure>
    </div>
  );
}
