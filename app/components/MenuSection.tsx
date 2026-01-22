import CheckeredPattern from './CheckeredPattern';
import MenuRow from './MenuRow';
import DoublePriceMenuRow from './DoublePriceMenuRow';
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
        <h2 className="text-5xl lg:text-6xl text-light-green genty ">
          Our Menu
        </h2>

        <p className="text-center text-light-green mb-8">
          First responders on duty come in and get 25% off!
        </p>

        {/* menu #1 container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-light-green">
          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl mb-4">
              Cedar Lane Specials
            </p>

            <div className="text-center mb-4">
              <p className="text-2xl font-semibold">Cheeseburger Plate & Tea</p>
              <p>
                Lettuce, tomato, mayonnaise on the burger, served with fries and
                coleslaw
              </p>
              <p className="font-semibold">$8.99</p>
            </div>

            <div className="text-center mb-4">
              <p className="text-2xl font-semibold">
                Hot Dog or Corn Dog Plate & Tea
              </p>
              <p>Served with fries and coleslaw</p>
              <p className="font-semibold">$7.99</p>
            </div>

            <div className="text-center mb-4">
              <p className="text-2xl font-semibold">Philly Steak Plate & Tea</p>
              <p>
                Mayonaisse, grilled pepers, and onions served with fries and
                coleslaw
              </p>
              <p className="font-semibold">$12.99</p>
            </div>
          </div>

          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl mb-4">Sides</p>

            {sidesData.map((data, index) => (
              <div key={index}>
                <MenuRow name={data.name} price={data.price} />
              </div>
            ))}
          </div>

          <div className="border border-light-green p-8 rounded-xl overflow-hidden text-center">
            <p className="genty text-3xl">Kids&apos; Menu</p>
            <p className="genty text-3xl mb-4">$5.99</p>

            <div className="mb-4">
              <p>Grilled Cheese</p>
              <p>Hot Dog</p>
              <p>Corn Dog</p>
              <p>Chicken Fingers</p>
              <p>Hamburger</p>
              <p>Cheeseburger (+$0.50)</p>
            </div>

            <p className="text-xs italic">
              Served with fries and a 12 oz. drink
            </p>
          </div>

          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl mb-4">Drinks</p>

            <p className="text-center mb-8">
              Pepsi - Diet Pepsi - Starry - Dr. Pepper - Mountain Dew -
              Tropicana Lemonade - Sweet / Unsweet Tea
            </p>

            <MenuRow name="Medium" price="2.35" />
            <MenuRow name="Jumbo" price="3.35" />
          </div>
        </div>

        {/* menu #2 container */}
        <div className="text-center text-light-green my-12">
          <p>All plates below served with fries and homemade coleslaw.</p>
          <p>Onion Rings, 1/2 & 1/2, Tater Tots, or a Veggie instead +$2.00</p>
          <p>Salad instead +$1.00</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-light-green">
          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl mb-4">Burgers</p>

            <div className="flex justify-end gap-4">
              <p>Sandwich</p>
              <p>Plate</p>
            </div>

            {burgersData.map((data, index) => (
              <div key={index}>
                <DoublePriceMenuRow
                  name={data.name}
                  sandwichPrice={data.sandwichPrice}
                  platePrice={data.platePrice}
                />
              </div>
            ))}
          </div>

          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl mb-4">Subs</p>

            <div className="flex justify-end gap-4">
              <p>Sandwich</p>
              <p>Plate</p>
            </div>

            {subsData.map((data, index) => (
              <div key={index}>
                <DoublePriceMenuRow
                  name={data.name}
                  sandwichPrice={data.sandwichPrice}
                  platePrice={data.platePrice}
                />
              </div>
            ))}
          </div>

          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl mb-4">Dinners</p>

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
            <p className="text-center genty text-3xl mb-4">Sandwiches</p>

            <div className="flex justify-end gap-4">
              <p>Sandwich</p>
              <p>Plate</p>
            </div>

            {sandwichesData.map((data, index) => (
              <div key={index}>
                <DoublePriceMenuRow
                  name={data.name}
                  sandwichPrice={data.sandwichPrice}
                  platePrice={data.platePrice}
                />
              </div>
            ))}
          </div>

          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl mb-4">Salads</p>

            {saladsData.map((data, index) => (
              <div key={index}>
                <MenuRow name={data.name} price={data.price} />
              </div>
            ))}
          </div>

          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl mb-4">Fried Chicken</p>

            {friedChickenData.map((data, index) => (
              <div key={index}>
                <MenuRow name={data.name} price={data.price} />
              </div>
            ))}
          </div>

          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl mb-4">Clubs</p>

            <div className="flex justify-end gap-4">
              <p>Sandwich</p>
              <p>Plate</p>
            </div>

            {clubsData.map((data, index) => (
              <div key={index}>
                <DoublePriceMenuRow
                  name={data.name}
                  sandwichPrice={data.sandwichPrice}
                  platePrice={data.platePrice}
                />
              </div>
            ))}
          </div>

          <div className="border border-light-green p-8 rounded-xl overflow-hidden">
            <p className="text-center genty text-3xl mb-4">
              Breakfast Sandwiches
            </p>

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
