import CheckeredPattern from './CheckeredPattern';

export default function Hero() {
  return (
    <div className="bg-dark-green ">
      <header className="p-24 text-center h-[80vh] flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-6xl text-light-green">
          The Clock
          <br />
          on Cedar Lane
        </h1>
        <p className="mt-4 text-light-green">Food that tastes like home.</p>
      </header>

      <CheckeredPattern rows={2} cols={24} />
    </div>
  );
}
