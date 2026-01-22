type MenuRowProps = {
  name: string;
  price: string;
};

export default function MenuRow({ name, price }: MenuRowProps) {
  return (
    <div className="menu-row">
      <span className="menu-name">{name}</span>

      <span className="menu-leader" aria-hidden="true" />

      <span className="menu-price">${price}</span>
    </div>
  );
}
