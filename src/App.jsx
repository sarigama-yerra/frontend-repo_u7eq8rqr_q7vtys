import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
    <div className="font-inter text-gray-900 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
