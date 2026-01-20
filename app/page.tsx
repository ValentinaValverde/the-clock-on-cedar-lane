import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import OldSchoolSection from './components/OldSchoolSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <MenuSection />
        <OldSchoolSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
