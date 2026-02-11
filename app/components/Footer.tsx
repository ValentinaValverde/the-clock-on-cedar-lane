export default function Footer() {
  return (
    <footer className="bg-black py-24 w-full flex justify-center items-center">
      <nav className="w-2/3 grid grid-cols-1 md:grid-cols-3 gap-12 text-light-green">
        <div>
          <h3 className="mb-4 genty text-3xl">Hours</h3>
          <ul className="space-y-1 text-sm">
            <li>Monday – Saturday</li>
            <li>11am – 9pm</li>
            <li className="pt-2">Sunday</li>
            <li>Closed</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 genty text-3xl">Location</h3>
          <address className="not-italic text-sm space-y-1">
            <p>1822 Cedar Lane Rd</p>
            <p>Greenville, SC 29607</p>
          </address>
        </div>

        <div>
          <h3 className="mb-4 genty text-3xl">Contact Us</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="tel:+18645551234">(864) 555-1234</a>
            </li>
            <li>
              <a href="mailto:hello@theclockencedar.com">
                hello@theclockencedar.com
              </a>
            </li>
            <li className="pt-4">
              <a href="https://instagram.com">Instagram</a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}
