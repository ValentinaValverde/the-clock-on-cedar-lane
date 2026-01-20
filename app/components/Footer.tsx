export default function Footer() {
  return (
    <footer className="bg-dark-green px-6 py-12 md:py-16">
      <nav className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-light-green">
        <div>
          <h3 className="font-semibold mb-4">Hours</h3>
          <ul className="space-y-1 text-sm">
            <li>Monday – Saturday</li>
            <li>11am – 9pm</li>
            <li className="pt-2">Sunday</li>
            <li>Closed</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Location</h3>
          <address className="not-italic text-sm space-y-1">
            <p>1823 Cedar Lane Rd</p>
            <p>Greenville, SC 29607</p>
          </address>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="tel:+18645551234" className="hover:underline">
                (864) 555-1234
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@theclockencedar.com"
                className="hover:underline"
              >
                hello@theclockencedar.com
              </a>
            </li>
            <li className="pt-2">
              <a href="https://instagram.com" className="hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}
