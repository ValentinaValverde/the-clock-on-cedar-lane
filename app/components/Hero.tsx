import CheckeredPattern from './CheckeredPattern';

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
    </section>
  );
}
