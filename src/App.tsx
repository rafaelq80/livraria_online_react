import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="bg-slate-50 text-slate-800 flex flex-col min-h-screen">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;