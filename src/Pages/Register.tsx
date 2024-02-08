//import React from 'react'

import CBH_RegisterNav from "../components/Min_Nav"
import Footer from "../components/Footer"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Register = () => {
  return (
    <>
      <CBH_RegisterNav />

      <main id="main" style={{paddingTop: "110px"}}>
          <section  id="services" className="services section-bg">
            <div className="container">

                <div className="section-title" style={{paddingTop: "10px"}}>
                  <h2>Register</h2>
                  <p style={{display: "none"}}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                    <div className="row" data-aos="zoom-in">
                      <div className="col-xl-4 col-md-12 d-flex align-items-stretch">
                        <Card className="text-center">
                          <Card.Header>Volunteer</Card.Header>
                          <Card.Body>
                            <Card.Title style={{paddingTop: "20px"}}>Student Volunteer</Card.Title>
                            <Card.Text style={{paddingTop: "20px"}}>
                              Are you a student looking to make a difference and gain invaluable experience? Join our hackathon team as a volunteer and help us create an unforgettable event!
                            </Card.Text>
                            <Button variant="dark">Register</Button>
                          </Card.Body>
                          <Card.Footer className="text-muted"><br /></Card.Footer>
                        </Card>
                      </div>
                      <div className="col-xl-4 col-md-12 d-flex align-items-stretch">
                        <Card className="text-center">
                          <Card.Header>Participant</Card.Header>
                          <Card.Body>
                            <Card.Title style={{paddingTop: "20px"}}>Student Hacker</Card.Title>
                            <Card.Text style={{paddingTop: "20px"}}>
                              Are you ready to challenge yourself and transform your ideas into reality? Our hackathon invites you to challenge conventions, collaborate with like-minded peers, and compete for amazing prizes. Secure your spot today!
                            </Card.Text>
                            <Button variant="dark" href="https://forms.gle/5KAPsCCPisDaD5218">Register</Button>
                          </Card.Body>
                          <Card.Footer className="text-muted"><br /></Card.Footer>
                        </Card>
                      </div>
                      <div className="col-xl-4 col-md-12 d-flex align-items-stretch">
                        <Card className="text-center">
                          <Card.Header>Volunteer</Card.Header>
                          <Card.Body>
                            <Card.Title style={{paddingTop: "20px"}}>Hack Mentor</Card.Title>
                            <Card.Text style={{paddingTop: "20px"}}>
                              Share your knowledge, inspire creativity, and support the next wave of tech talent by mentoring at our hackathon. Sign up now to make a lasting impact and nurture the future of technology.
                            </Card.Text>
                            <Button variant="dark">Register</Button>
                          </Card.Body>
                          <Card.Footer className="text-muted"><br /></Card.Footer>
                        </Card>
                      </div>
                    </div>
                </div>
          </section>
          <Footer />
      </main>    

      
    </>
    
  )
}

export default Register