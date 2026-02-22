import Header from './components/Header';
import Footer from './components/Footer';
import Router from './router/Router';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
