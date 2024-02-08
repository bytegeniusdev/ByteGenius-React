//import React from 'react'

import Footer from "../components/Footer"
import CBH_SponsorHero from "../components/CBH_SponsorHero"
import Nav from "../components/Min_Nav"
import CBH_Sponsor from "../components/CBH_Sponsor"

const SponsorSignUpPage = () => {
  return (
    <>      
        <Nav />
        <CBH_SponsorHero />
        <main id="main">
            <CBH_Sponsor />
            <Footer />
        </main>    
      </>
  )
}

export default SponsorSignUpPage