interface CheckeredPatternProps {
  rows?: number;
  cols?: number;
}

export default function CheckeredPattern({ rows = 2, cols = 12 }: CheckeredPatternProps) {
  const squares = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const isDark = (row + col) % 2 === 0;
      squares.push(
        <span
          key={`${row}-${col}`}
          className={`aspect-square ${isDark ? 'bg-dark-green' : 'bg-light-green'}`}
          aria-hidden="true"
        />
      );
    }
  }

  return (
    <aside
      className="grid w-full"
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      aria-label="Decorative checkered pattern"
    >
      {squares}
    </aside>
  );
}
