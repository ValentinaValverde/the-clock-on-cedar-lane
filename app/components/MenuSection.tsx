import CheckeredPattern from './CheckeredPattern';
import MenuRow from './MenuRow';
import {
  sidesData,
  burgersData,
  sandwichesData,
  clubsData,
  subsData,
  saladsData,
  breakfastSandwichesData,
  dinnersData,
  friedChickenData,
} from '@/lib/constants';

export default function MenuSection() {
  return (
    <div className="w-full bg-dark-green flex flex-col items-center justify-center">
      <div className="w-2/3 py-24 flex flex-col items-center" id="menu">
        <h2 className="text-5xl lg:text-6xl text-light-green genty mb-8">
          Our Menu
        </h2>

        {/* menu #1 container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-light-green">
          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl">Sides</p>

            {sidesData.map((data, index) => (
              <div key={index}>
                <MenuRow name={data.name} price={data.price} />
              </div>
            ))}
          </div>

          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl">Cedar Lane Specials</p>
          </div>

          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl">Kids Menu</p>
          </div>

          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl">Drinks</p>
          </div>

          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl">
              First responders on duty come in and get 25% off!
            </p>
          </div>
        </div>

        {/* menu #2 container */}
        <div className="text-center text-light-green my-12">
          <p>All plates below served with fries and homemade coleslaw.</p>
          <p>Onion Rings, 1/2 & 1/2, Tater Tots, or a Veggie instead +$2.00</p>
          <p>Salad instead +$1.00</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-light-green">
          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl">Burgers</p>
          </div>

          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl">Subs</p>
          </div>

          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl">Dinners</p>

            {dinnersData.map((data, index) => (
              <div key={index}>
                <MenuRow name={data.name} price={data.price} />
              </div>
            ))}

            <p className="text-center text-sm italic mt-4">
              All Dinners served with your choice of two sides: fries, okra,
              homemade coleslaw, salad, green beans, or mashes potatoes with
              gravy.
            </p>
            <p className="text-center text-xs italic mt-4">
              Onion Rings or Tater Tots +$1.00
            </p>
          </div>

          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl">Sandwiches</p>
          </div>

          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl">Salads</p>

            {saladsData.map((data, index) => (
              <div key={index}>
                <MenuRow name={data.name} price={data.price} />
              </div>
            ))}
          </div>

          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl">Fried Chicken</p>

            {friedChickenData.map((data, index) => (
              <div key={index}>
                <MenuRow name={data.name} price={data.price} />
              </div>
            ))}
          </div>

          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl">Clubs</p>
          </div>

          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl">Breakfast Sandwiches</p>

            {breakfastSandwichesData.map((data, index) => (
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
