type MenuRowProps = {
  name: string;
  sandwichPrice: string;
  platePrice: string;
};

export default function DoublePriceMenuRow({
  name,
  sandwichPrice,
  platePrice,
}: MenuRowProps) {
  return (
    <div className="menu-row">
      <span className="menu-name">{name}</span>

      {/* dot leader */}
      <span className="menu-leader" aria-hidden="true" />

      <div className="menu-prices">
        <span className="menu-price">${sandwichPrice}</span>
        <span className="px-2">...</span>
        <span className="menu-price">${platePrice}</span>
      </div>
    </div>
  );
}
