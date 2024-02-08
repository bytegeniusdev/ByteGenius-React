// src/components/Home.tsx

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
//import Mission from "../components/Mission";

function Home() {
    return (
      <>      
        <Nav />
        <Hero />
        <main id="main">
            <About />
            <Footer />
        </main>    
      </>
    )
  }
  
  export default Home
