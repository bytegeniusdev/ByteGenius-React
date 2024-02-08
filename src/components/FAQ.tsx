// src/components/Schedule.tsx

import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <section id="faq" className="faq section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Frequently Asked Questions</h2>
                    <p>
                        Got questions? We've got answers! Check out the section below to find solutions to common queries about our event, registration process, rules, and more.
                    </p>
                </div>

                <div className="faq-list">
                    <Accordion defaultActiveKey={['0']} alwaysOpen className="faq-list">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><i className="bx bx-help-circle icon-help"></i> <a>What is Code Black Hacks? </a></Accordion.Header>
                            <Accordion.Body>
                            Code Black Hacks will be a 48-hour event aimed at fostering collaboration, innovation, and creative problem-solving in the music industry as well as in the tech industry.
                            The event will feature keynote speakers, workshops, and panel discussions, which will occur on an hourly basis while students compete in teams in groups of 4-6 team members.
                            At the end of the weekend, students will be able to showcase their solutions in various categories to a panel of judges for prizes, internship opportunities, and the potential to receive funding to launch their idea.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><i className="bx bx-help-circle icon-help"></i> <a>Who is eligibal to participate?</a></Accordion.Header>
                            <Accordion.Body>
                                You must be a currently enrolled college/university student if you wish to compete as a hacker.<br />

                                All other students are welcome to join us and register as volunteers or hack-mentors.  
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><i className="bx bx-help-circle icon-help"></i> <a>Where will Code Black Hacks be located?</a></Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    The check-in process will be held at Kopleff Recital Hall, and following the check-in process we will be having our opening ceremoney in the Kopleff auditorium. The closing ceremony will also be held here. 15 Gilmer Sr SE, Atlanta, GA 30303
                                </p><br />
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.2578827284005!2d-84.38880032366082!3d33.754001333418266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f503863cb0d405%3A0x3608a635f9bec6d2!2sFlorence%20Kopleff%20Recital%20Hall!5e0!3m2!1sen!2sus!4v1693773669301!5m2!1sen!2sus" loading="lazy" style={{width: "100%", height: "290px", border:"0"}}></iframe>
                                <p>
                                    Our main hacking space will be located at the Georgia State University School of Music Standard Building. 95 Luckie Street, Atlanta, GA 30303.
                                </p><br />
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.127861968593!2d-84.38958482103739!3d33.75736163919888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f503876a6e0d8f%3A0xac091dfd651b6909!2s95%20Luckie%20St%20NW%2C%20Atlanta%2C%20GA%2030303!5e0!3m2!1sen!2sus!4v1693773487376!5m2!1sen!2sus" loading="lazy" style={{width: "100%", height: "290px", border:"0"}}></iframe>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><i className="bx bx-help-circle icon-help"></i> <a>What should I bring?</a></Accordion.Header>
                            <Accordion.Body>
                                Hackers should bring a laptop with a power supply and a positive attitude with an eagerness to learn. It is recommended that students bring a sleeping bag and a pillow if they plan to stay at the venue overnight. 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header><i className="bx bx-help-circle icon-help"></i> <a>Where can I park during the event?</a></Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    Hackers, Sponsors, and Volunteers may have to pay to park on Friday evening. All participants will be able to park at GSU's G-Deck parking garage for free on Saturday and Sunday.

                                </p><br />
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.5215253845154!2d-84.38923243544964!3d33.75242568843427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5031a8d4ae837%3A0x342f2f706e1fd63e!2sG%20Deck%20Parking!5e0!3m2!1sen!2sus!4v1693773022798!5m2!1sen!2sus" loading="lazy" style={{width: "100%", height: "290px", border:"0"}}></iframe>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
