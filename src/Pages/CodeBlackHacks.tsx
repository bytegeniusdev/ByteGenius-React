// src/components/CodeBlackHacks.tsx

import CBH_Nav from "../components/CBH_Nav.tsx"
import CBH_Hero from "../components/CBH_Hero";
import Schedule from "../components/Schedule";
import Tracks from "../components/Tracks";
import CTA from '../components/CallToAction.tsx'
import Sponsors from "../components/Sponsors";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function CodeBlackHacks() {
    return (
      <>      
        <CBH_Nav />
        <CBH_Hero />
        <main id="main">
            <Sponsors />
            <Schedule />
            <Tracks />
            <CTA />
            <FAQ />
            <Footer />
        </main>    
      </>
    )
  }
  
  export default CodeBlackHacks
