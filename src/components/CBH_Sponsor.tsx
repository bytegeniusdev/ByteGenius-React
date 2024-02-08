// src/components/CBH_Sponsor.tsx

import { Button, Card } from "react-bootstrap";

const CBH_Sponsor = () => {
    return (
        <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Sponsor Us</h2>
                    <p style={{display: "none"}}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row" data-aos="zoom-in">
                      <div className="col-xl-6 col-md-12 d-flex align-items-stretch">
                        <Card className="text-center">
                          <Card.Header><br /></Card.Header>
                          <Card.Body>
                            <Card.Title style={{paddingTop: "20px"}}>Sponsor</Card.Title>
                            <Card.Text style={{paddingTop: "20px"}}>
                                Join Us as a Sponsor! Elevate your brand and connect with the brightest minds in tech by sponsoring our upcoming hackathon. Click here to discover the exclusive benefits and opportunities awaiting you
                            </Card.Text>
                            <Button variant="dark" href="https://calendly.com/bytegenius/code-black-hacks-sponsorship-meeting">Register</Button>
                          </Card.Body>
                          <Card.Footer className="text-muted"><br /></Card.Footer>
                        </Card>
                      </div>
                      <div className="col-xl-6 col-md-12 d-flex align-items-stretch">
                        <Card className="text-center">
                          <Card.Header><br /></Card.Header>
                          <Card.Body>
                            <Card.Title style={{paddingTop: "20px"}}>Judge</Card.Title>
                            <Card.Text style={{paddingTop: "20px"}}>
                                Become a Judge! Leverage your expertise to mentor and evaluate innovative projects at our hackathon. Sign up now to inspire the next generation of tech leaders
                            </Card.Text>
                            <Button variant="dark" href="#">Register</Button>
                          </Card.Body>
                          <Card.Footer className="text-muted"><br /></Card.Footer>
                        </Card>
                      </div>
                    </div>
            </div>
        </section>
    );
};

export default CBH_Sponsor;
