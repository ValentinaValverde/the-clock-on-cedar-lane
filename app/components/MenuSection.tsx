import CheckeredPattern from './CheckeredPattern';
import MenuRow from './MenuRow';
import { sidesData } from '@/lib/constants';

export default function MenuSection() {
  return (
    <div className="w-full bg-dark-green flex flex-col items-center justify-center">
      <div className="w-2/3 py-24 flex flex-col items-center" id="menu">
        <h2 className="text-5xl lg:text-6xl text-light-green genty mb-8">
          Our Menu
        </h2>

        {/* menu #1 container */}
        <div className="grid grid-cols-3 gap-8 text-light-green">
          <div className="border border-light-green p-8 rounded-sm">
            <p className="text-center genty text-3xl">Sides</p>

            {sidesData.map((data, index) => (
              <div key={index}>
                <MenuRow name={data.name} price={data.price} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <CheckeredPattern rows={2} cols={24} />
    </div>
  );
}
