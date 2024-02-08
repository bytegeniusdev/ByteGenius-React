//import React from 'react'

import ErrorNav from "../components/Min_Nav";

function ErrorPage() {
  return (
    <>
      <ErrorNav />
      <section id="hero" className="d-flex align-items-center">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                      <h1 style={{fontSize: "86px"}}>Error </h1><br />
                      <h2 style={{fontSize: "36px"}}>Page not found!</h2>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                      <br /><br /><br />
                      <img src="img/DALL_E_white_robot.png" className="img-fluid" alt="" />
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}

<section style={{padding: "100px"}}>
<h3>Error! page not found!</h3>
</section>

export default ErrorPage;