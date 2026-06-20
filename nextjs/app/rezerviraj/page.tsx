import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RezervirajForm from '@/components/RezervirajForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Резервирај билет · Охридски Времеплов',
  description: 'Резервирајте билет за Охридскиот Времеплов онлајн.',
  alternates: { canonical: 'https://ohridski-vremeplov.vercel.app/rezerviraj' },
};

export default function RezervirajPage() {
  return (
    <>
      <Navbar />
      <main className="rez-page">
        <div className="rez-inner">
          <div className="rez-eyebrow">Охридски Времеплов</div>
          <h1 className="rez-h1">Резервирај <em>билет</em></h1>
          <p className="rez-lead">Изберете тип на билет, датум и термин и внесете ги вашите податоци. По потврдата ќе бидете пренасочени кон безбедна платежна страница.</p>
          <RezervirajForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
