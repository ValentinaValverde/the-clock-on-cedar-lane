import Hero from './components/Hero';
import ImageSection from './components/ImageSection';
import MenuSection from './components/MenuSection';
import OldSchoolSection from './components/OldSchoolSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ImageSection />
        <MenuSection />
        <OldSchoolSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
