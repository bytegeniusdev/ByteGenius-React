// src/components/Schedule.tsx

import Accordion from "react-bootstrap/esm/Accordion";

const Schedule = () => {
    return (
        <section className="schedule section-bg">
            <div className="container-fluid" data-aos="fade-up">

                <div className="row">

                    <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

                        <div className="content">
                            <h3>Code Black Hacks <strong>Schedule</strong></h3>
                            <p>
                                Make the most of your hackathon experience! Explopre the schedule below to discover the lineup of exciting events, workshops, and activities awaiting you. From captivating keynote sessions to thrilling gaming challenges, we have it all!<br />
                                *Schedule subject to change as we get closer to the event
                            </p>
                        </div>

                        <div className="accordion-list">
                            <Accordion defaultActiveKey={['0']} alwaysOpen className="faq-list">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><a><b>April 19</b> Friday</a></Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            4:30 PM Check-In Begins<br /><br />

                                            6:00 PM Opening Ceremonies<br /><br />

                                            7:00 PM Dinner and Team Formation<br /><br />

                                            8:00 PM Hacking Begins<br /><br />
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><a><b>April 20</b> Saturday</a></Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            12:00 AM Midnight Snack<br /><br />

                                            7:00 AM Breakfast<br /><br />

                                            12:00 PM Lunch<br /><br />

                                            7:00 PM Dinner<br /><br />

                                            8:30 PM Smash Bros. Tournament<br /><br />
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><a><b>April 21</b> Sunday</a></Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            12:00 AM Midnight Snack<br /><br />

                                            9:00 AM Breakfast<br /><br />

                                            10:00 AM Hacking Ends & Projects Submissions Start<br /><br />

                                            12:00 PM Lunch<br /><br />

                                            1:00 PM Project Presentations and Judging<br /><br />

                                            4:00 PM Closing Ceremonies & Awards<br /><br />
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                    </div>

                    <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" data-aos="zoom-in" data-aos-delay="150"> &nbsp;</div>
                </div>

            </div>
        </section>
    );
};

export default Schedule;
