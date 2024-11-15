import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";


export default function Home() {
  return (
    <div className="bg-slate-50">   
      <Navbar />
      <Hero />
      <About />
    </div>
  
  );
}