import CheckeredPattern from './CheckeredPattern';

export default function MenuSection() {
  return (
    <div className="w-full bg-dark-green flex flex-col items-center justify-center">
      <div className="w-2/3 py-24 flex flex-col items-center" id="menu">
        <h2 className="text-5xl lg:text-6xl text-light-green genty">
          Our Menu
        </h2>
      </div>

      <CheckeredPattern rows={2} cols={24} />
    </div>
  );
}
