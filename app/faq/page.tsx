import Header from '../components/Header';
import Footer from '../components/Footer';
import FaqSection from '../components/FaqSection';

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-12 px-4 sm:px-8">
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
