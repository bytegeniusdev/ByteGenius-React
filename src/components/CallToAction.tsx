// src/components/CallToAction.tsx

const CallToAction = () => {
    return (
        <section id="cta" className="cta">
            <div className="container" data-aos="zoom-in">

                <div className="row">
                    <div className="col-lg-9 text-center text-lg-start">
                        <h3>Register Now</h3>
                        <p>
                            Calling all hackers! Unleash your skills and join us at Code Black Hacks where you'll have the chance to showcase your talent, compete with the best, and win amazing prizes.
                            Register now and be part of an exhilarating journey in shaping the future of Artificial Intelligence (AI) and its applications within the technology industry!
                        </p>
                    </div>
                    <div className="col-lg-3 cta-btn-container text-center">
                        <a className="cta-btn align-middle" href="/Register">Register Now!</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CallToAction;
