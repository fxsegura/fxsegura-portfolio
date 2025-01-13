import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

const App = () => {
  return (
    <main className="max-w-screen mx-auto">
      <Navbar/>  
      <Hero/>  
      <About/>
    </main>
  );
}

export default App;