// src/components/CBH_Hero.tsx

const CBH_Hero = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container hero-container">
                <div className="row h-100 row-offest">
                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
                        <div className="text-layer">
                            <h1>Empowering you to generate your future</h1>
                            <h2>@Georgia State University</h2>
                            <h2>April 17th - 21st 2024</h2>

                            <div>
                                <a href="#cta" className="btn-get-started">Register</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-video">
                        <video autoPlay muted loop className="video-layer" id="CBH_Hero_Right">
                            <source src="/public/video/CBH_hero_video.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default CBH_Hero;
