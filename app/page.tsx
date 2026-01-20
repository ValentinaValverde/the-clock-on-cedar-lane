import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import OldSchoolSection from './components/OldSchoolSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
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
