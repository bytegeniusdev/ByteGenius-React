// src/components/CBH_SponsorHero.tsx

const CBH_SponsorHero = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                        <h1>Welcome to the Byte Genius Hackathon Sponsor Sign Up System</h1>
                        <h2>Join Us In Empowering the Next Generation of Innovators</h2>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                            <a href="/codeblackhacks" className="btn-get-started scrollto">Learn More</a>
                            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video" style={{display: "none"}}><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                        <img src="img/CBH_byte_gen_logo.png" className="img-fluid animated" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CBH_SponsorHero;
