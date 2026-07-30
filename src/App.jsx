import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';
import WhatsAppFloatingButton from './components/common/WhatsAppButton.jsx';
import AnimatedRoutes from './routes/AppRoutes.jsx';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatedRoutes />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
