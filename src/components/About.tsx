// src/components/About.tsx

const About = () => {
    return (
        <section id="about" className="about section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>About Us</h2>
                </div>

                <div className="row content">
                    <div className="col-lg-12">
                        <p>
                            Byte Genius, a future focused non-profit, merges music and technology, educating and inspiring students to explore STEAM careers.
                            Our organizational team, comprising enthusiastic tech innovators and music industry leaders, collaborates with Major League Hacking <a href="https://mlh.io">(MLH)</a> to craft premier hackathons. 
                            Join us at Georgia State University for the inaugural Code Black Hacks this Spring – a gateway to innovation!"
                        </p>
                        <ul style={{display: "none"}}>
                            <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                            <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                            <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
