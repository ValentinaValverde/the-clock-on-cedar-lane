import Navbar from './components/Navbar';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

import localFont from 'next/font/local';

const gentyFont = localFont({
  src: './fonts/GentyDemo-Regular.ttf',
  variable: '--font-genty',
  display: 'swap',
});

const poppins = Poppins({
  variable: '--font-poppins-sans',
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'The Clock on Cedar',
  description: 'Food that tastes like home.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${gentyFont.variable} ${poppins.variable} antialiased`}>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
