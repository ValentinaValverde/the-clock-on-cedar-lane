import Image from 'next/image';

const PLACEHOLDER_IMAGE = "https://images.pexels.com/photos/12540668/pexels-photo-12540668.png";

const menuCategories = [
  {
    title: "Sides",
    items: ["Fries", "Onion Rings", "Coleslaw", "Mac & Cheese"]
  },
  {
    title: "Cedar Lane Specials",
    items: ["The Classic Burger", "Philly Cheesesteak", "BBQ Pulled Pork"]
  },
  {
    title: "Dinners",
    items: ["Fried Chicken", "Meatloaf", "Country Fried Steak"]
  },
  {
    title: "Kids' Menu",
    subtitle: "12 & Under",
    items: ["Chicken Tenders", "Grilled Cheese", "Mini Burger"]
  },
  {
    title: "Drinks",
    items: ["Sweet Tea", "Lemonade", "Coffee", "Milkshakes"]
  },
  {
    title: "Plus Reservations",
    description: "For parties of 6 or more, please call to reserve a table."
  }
];

export default function MenuSection() {
  return (
    <section className="bg-light-green px-6 py-16 md:py-24">
      <h2 className="text-center text-3xl md:text-4xl italic text-dark-green mb-12">
        Our Menu
      </h2>

      <article className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
        <menu className="flex-1 border-4 border-dark-green bg-light-green p-6 md:p-8">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {menuCategories.map((category) => (
              <li key={category.title}>
                <h3 className="text-lg font-semibold italic text-dark-green border-b border-dark-green pb-2 mb-3">
                  {category.title}
                </h3>
                {category.subtitle && (
                  <p className="text-sm text-dark-green mb-2">{category.subtitle}</p>
                )}
                {category.items && (
                  <ul className="space-y-1">
                    {category.items.map((item) => (
                      <li key={item} className="text-sm text-black">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {category.description && (
                  <p className="text-sm text-black">{category.description}</p>
                )}
              </li>
            ))}
          </ul>
        </menu>

        <figure className="lg:w-64 flex-shrink-0">
          <Image
            src={PLACEHOLDER_IMAGE}
            alt="Featured dish from our menu"
            width={300}
            height={400}
            className="w-full h-64 lg:h-full object-cover"
          />
        </figure>
      </article>
    </section>
  );
}
