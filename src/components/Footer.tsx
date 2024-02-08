// src/components/Footer.tsx

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>Byte Genius</h3>
                            <p>
                                <strong>Email:</strong> bytegenius.tech@gmail.com<br></br>
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="/#about">About us</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Code Black Hacks</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Discord</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Devpost</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Social Networks</h4>
                            <p>
                                Don't miss out on the excitement! Join our social media family and stay in the loop with all things tech, innovation, and hackathon-related.
                            </p>
                            <div className="social-links mt-3">
                                <a href="#" className="twitter" style={{display: "none"}}><i className="bx bxl-twitter"></i></a>
                                <a href="https://www.facebook.com/people/Byte-Genius-Inc/100093699643623/" className="facebook"><i className="bx bxl-facebook"></i></a>
                                <a href="https://www.instagram.com/bytegenius.tech/" className="instagram"><i className="bx bxl-instagram"></i></a>
                                <a href="https://www.linkedin.com/company/byte-genius-inc/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container footer-bottom clearfix">
                <div className="copyright">
                    &copy;Copyright <strong><span>Byte Genius Inc. 2024</span></strong>. All Rights Reserved
                </div>

            </div>
        </footer>
    );
};

export default Footer;
