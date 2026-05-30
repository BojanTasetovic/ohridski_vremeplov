import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SenseStrip from '@/components/SenseStrip';
import Immersion from '@/components/Immersion';
import Stats from '@/components/Stats';
import Rooms from '@/components/Rooms';
import Teatar from '@/components/Teatar';
import News from '@/components/News';
import Reviews from '@/components/Reviews';
import Quiz from '@/components/Quiz';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import FloatingTicket from '@/components/FloatingTicket';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Loader />
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <Hero />
      <SenseStrip />
      <Immersion />
      <Stats />
      <Rooms />
      <Teatar />
      <News />
      <Reviews />
      <Quiz />
      <CTA />
      <FloatingTicket />
      <Footer />
      <ScrollReveal />
    </>
  );
}
