import CheckeredPattern from './CheckeredPattern';

export default function MenuSection() {
  return (
    <section className="bg-dark-green ">
      <div className="p-24 text-center">
        <h2 className="mt-4 text-light-green">Our Menu</h2>
      </div>

      <CheckeredPattern rows={2} cols={24} />
    </section>
  );
}
