export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-light-green">
      <a href="/" className="text-lg font-medium italic text-dark-green">
        The Clock on Cedar
      </a>
      <nav>
        <a
          href="/signin"
          className="rounded-full bg-dark-green px-6 py-2 text-sm text-light-green transition-opacity hover:opacity-90"
        >
          Sign In
        </a>
      </nav>
    </header>
  );
}
