import React from 'react'
import { Accordion, Card, CardGroup, Col, Container, Row } from 'react-bootstrap'
import Button from '../../Atoms/Button/Button'
import "./HomePage.scss"
import engineer from "./../../assets/engineer.svg"
import measuring from "./../../assets/measuring.svg"
import ruler from "./../../assets/ruler.svg"
import aboutImg from "./../../assets/video-overlay.png"
import playBtn from "../../assets/play.svg"
import appImg1 from "../../assets/Jerry-Piping.png"
import appImg2 from "../../assets/Korane-Scents.png"
import appImg3 from "../../assets/Nadine-Ghaida.png"
import appImg4 from "../../assets/LeeveOn-Branding.png"
import appImg5 from "../../assets/Jrango-Glasses.png"
import appImg6 from "../../assets/Crypto-Learn-Invest.png"
import test1 from "../../assets/Crypto-Test.png"
import test2 from "../../assets/Jerry-Piping-Test.png"
import test3 from "../../assets/LeeveOn-Test.png"
import client1 from "../../assets/clients1.png"
import quotes from "../../assets/quotes.svg"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Autoplay } from 'swiper'

const HomePage = () => {
    return (
        <div className='pages'>
            <section className='landingSection'>
                <div className="bgColor">
                    <Container className='text-center text-md-start'>
                        <h1>Start-to-Finish Safety & Compliance Management Software
                        </h1>
                        <p>Save 10-20 hours per user per month with our all-digital,<br /> mobile-friendly compliance management software</p>
                        <Button label="Free Trial" />
                    </Container>
                </div>
            </section>
            <section className='countSection'>
                <Container>
                    <div className='d-flex'>
                        <Card className='card1'>
                            <h2>147</h2>
                            <p>Completed Projects</p>
                        </Card>
                        <Card className='card2'>
                            <h2>25+</h2>
                            <p>Years of Experience</p>
                        </Card>
                    </div>
                    <div>
                        <Card className='upCard'>
                            <h3>Easy, Paperless Tailgate Meetings & Toolbox Talks</h3>
                            <Row className='my-3 d-flex align-items-center'>
                                <Col sm={2}>
                                    <img src={engineer} alt="" className="img-fluid" />
                                </Col>
                                <Col sm={10}>
                                    <h6>Easy in the Field. Easy in the Office</h6>
                                    <span>Smart nation is easy for everyone in the field, GCs, and anyone in between</span>
                                </Col>
                            </Row>
                            <Row className='my-3 d-flex align-items-center'>
                                <Col sm={2}>
                                    <img src={ruler} alt="" className="img-fluid" />
                                </Col>
                                <Col sm={10}>
                                    <h6>Huge Library of Topics + Personalized</h6>
                                    <span>Smart nation arrives preloaded with a massive library of common safety topics</span>
                                </Col>
                            </Row>
                            <Row className='my-3 d-flex align-items-center'>
                                <Col sm={2}>
                                    <img src={measuring} alt="" className="img-fluid" />
                                </Col>
                                <Col sm={10}>
                                    <h6>Full Accountability & Transparency</h6>
                                    <span>Quickly perform Toolbox Audits to ensure field users remain in full compliance</span>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </Container>
            </section>
            <section className='aboutSection'>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col sm={12} md={6} className='text-center text-md-start'>
                            <h2>About Us</h2>
                            <h5>Comprehensive safety & compliance management from any device, all within our easy-to-use app. Manage your entire day-to-day safety program from one location.</h5>
                            <div className='my-5'>
                                <p>
                                    AnchoRock Solutions is a construction safety software company helping improve jobsite safety, compliance, and digital safety management for construction companies around the U.S. since 2018. We believe that technology should make life easier for those working in the field so we strive to provide a platform that's as easy to use as it is time-saving.
                                </p>
                                <p>
                                    Without field adoption, AnchoRock – or any other digital solution, for that matter – stood little to no chance of succeeding. That’s why AnchoRock was designed from the ground up as a “mobile-first” platform, and the team has been hyper-focused on maintaining a design that is simple and easy to use since.
                                </p>
                            </div>
                            <Button label="Learn More" />
                        </Col>
                        <Col sm={12} md={5} className="text-center">
                            <img src={aboutImg} alt="" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="videoSection">
                <Container className='text-center'>
                    <h3>The Comprehensive Software for Managing Jobsite Safety and Compliance</h3>
                    <Row className='d-flex justify-content-evenly mt-5'>
                        <Col sm={12} md={6} lg={2}>
                            <h4>Your site Just Got Safer</h4>
                            <p>
                                Nothing on a jobsite is more important than safety. That’s why it costs the average construction employee dozens of hours per month to track,  and manage their construction safety compliance. The easier compliance tracking and reporting is, the safer your entire workforce will be.
                            </p>
                        </Col>
                        <Col sm={12} md={6} lg={2}>
                            <h4>Painless, Straightforward</h4>
                            <p>
                                We designed a painless application with universal usability, meaning Superintendents, Foremen, and Field Safety Staff alike can rely on seamless integration with little to no learning curve.
                            </p>
                        </Col>
                        <Col sm={12} md={6} lg={2}>
                            <h4>Easy-to-Use</h4>
                            <p>
                                Saftey nation is easy for everyone the field, GCs, and anyone in between. The Toolbox Talk module is revolutionizing how construction companies manage their day-to-day jobsite safety with a slew of easy-to-use features that make you more efficient than ever.
                            </p>
                        </Col>
                        <Col sm={12} md={6} lg={2}>
                            <h4>24x7 Friendly Support</h4>
                            <p>
                                We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="video">
                    <img src={playBtn} alt="" className="img-fluid playBtn" />
                </div>
            </section>
            <section className='clientsSection'>
                <Container className='text-center text-md-start'>
                    <h2>
                        Companies We Work With
                    </h2>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        centeredSlides={true}
                        modules={[Autoplay]}
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            "@0.75": {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            "@1.00": {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            "@1.50": {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <Card>
                                <Card.Img variant="top" src={client1} />
                                <Card.Body>
                                    <Card.Title>Boyett Construction</Card.Title>
                                    <Card.Subtitle>Arcoro</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card>
                                <Card.Img variant="top" src={client1} />
                                <Card.Body>
                                    <Card.Title>Boyett Construction</Card.Title>
                                    <Card.Subtitle>Arcoro</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card>
                                <Card.Img variant="top" src={client1} />
                                <Card.Body>
                                    <Card.Title>Boyett Construction</Card.Title>
                                    <Card.Subtitle>Arcoro</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card>
                                <Card.Img variant="top" src={client1} />
                                <Card.Body>
                                    <Card.Title>Boyett Construction</Card.Title>
                                    <Card.Subtitle>Arcoro</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card>
                                <Card.Img variant="top" src={client1} />
                                <Card.Body>
                                    <Card.Title>Boyett Construction</Card.Title>
                                    <Card.Subtitle>Arcoro</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card>
                                <Card.Img variant="top" src={client1} />
                                <Card.Body>
                                    <Card.Title>Boyett Construction</Card.Title>
                                    <Card.Subtitle>Arcoro</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card>
                                <Card.Img variant="top" src={client1} />
                                <Card.Body>
                                    <Card.Title>Boyett Construction</Card.Title>
                                    <Card.Subtitle>Arcoro</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card>
                                <Card.Img variant="top" src={client1} />
                                <Card.Body>
                                    <Card.Title>Boyett Construction</Card.Title>
                                    <Card.Subtitle>Arcoro</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </section>
            <section className='testimonialsSection'>
                <Container>
                    <div className="wrapper">
                        <h2 className='text-center text-md-start'>
                            Real Stories from<br /> Real Customers
                        </h2>
                        <p className='text-center text-md-start'>Get inspired by these stories</p>
                        <Row className='d-flex justify-content-center align-items-center mtUp'>
                            <Col sm={12} md={6}>
                                <Card className='ms-auto p-4' style={{ width: "22rem" }}>
                                    <Card.Img variant="top" src={test1} style={{ width: "8rem", marginLeft: "1rem" }} />
                                    <Card.Body>
                                        <Card.Text>
                                            Smart nation integrates with Crypto learn invest Learning Management System (LMS) for easy in-the-field tracking of OSHA-required trainings and required certifications.
                                        </Card.Text>
                                        <Card.Title>Floyd Miles</Card.Title>
                                        <Card.Subtitle>Vice President, CLI</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={12} md={6}>
                                <Card style={{ width: "27rem" }} className='my-4 p-4'>
                                    <Card.Img variant="top" src={test2} style={{ width: "8rem", marginLeft: "1rem" }} />
                                    <Card.Body>
                                        <Card.Text>
                                            Combine the industry’s trusted JPNL with premier field-first safety software to empower your foremen, supervisors and safety pros with compliance tools and data in an easy-to-use app
                                        </Card.Text>
                                        <Card.Title>Jane Cooper</Card.Title>
                                        <Card.Subtitle>CEO, JPNL</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: "18rem" }} className='my-4 p-4'>
                                    <Card.Img variant="top" src={test3} style={{ width: "8rem", marginLeft: "1rem" }} />
                                    <Card.Body>
                                        <Card.Text>
                                            Integration Component: Employees added to LeeveOn Branding
                                        </Card.Text>
                                        <Card.Title>Kristin Watson</Card.Title>
                                        <Card.Subtitle>Co-Founder, LeeveOn Branding</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <section className='safetySection'>
                <Container>
                    <Row className='d-flex justify-content-center'>
                        <Col sm={12} md={6} className="d-flex flex-column justify-content-center text-center text-md-start">
                            <h3>
                                Safety Professional Approved.
                            </h3>
                            <p>Built for construction safety professionals, by construction <br />
                                safety professionals.
                            </p>
                        </Col>
                        <Col sm={12} md={6}>
                            <Row>
                                <Col xs={6} md={4} className=" text-center">
                                    <img src={appImg1} alt="" className="imgfluid" />
                                </Col>
                                <Col xs={6} md={4} className=" text-center">
                                    <img src={appImg2} alt="" className="imgfluid" />
                                </Col>
                                <Col xs={6} md={4} className=" text-center">
                                    <img src={appImg3} alt="" className="imgfluid" />
                                </Col>
                                <Col xs={6} md={4} className=" text-center">
                                    <img src={appImg4} alt="" className="imgfluid" />
                                </Col>
                                <Col xs={6} md={4} className=" text-center">
                                    <img src={appImg5} alt="" className="imgfluid" />
                                </Col>
                                <Col xs={6} md={4} className=" text-center">
                                    <img src={appImg6} alt="" className="imgfluid" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="contactSection">
                <Container>
                    <Row className='d-flex justify-content-between'>
                        <Col sm={12} md={3} className="d-flex flex-column justify-content-between text-center text-md-start">
                            <h3>Let's Build Something Together</h3>
                            <p>Smart nation is the construction companies’ solution for making job sites safer and compliant with regulatory requirements in the safest way possible. With a ‘mobile-first’ approach in mind.</p>
                            <Button label="Get in touch" />
                        </Col>
                        <Col sm={12} md={8}>
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is the difference between an active and inactive user?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        We price based on two types of users: active and inactive.
                                        An active user is someone who will login to the software and utilize it to host a tailgate meeting, lead a training, complete an inspection, et
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What type of payment do we accept?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        We price based on two types of users: active and inactive.
                                        An active user is someone who will login to the software and utilize it to host a tailgate meeting, lead a training, complete an inspection, et
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Will you provide training documentation?

                                    </Accordion.Header>
                                    <Accordion.Body>
                                        We price based on two types of users: active and inactive.
                                        An active user is someone who will login to the software and utilize it to host a tailgate meeting, lead a training, complete an inspection, et
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>How long will it take to get our account setup?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        We price based on two types of users: active and inactive.
                                        An active user is someone who will login to the software and utilize it to host a tailgate meeting, lead a training, complete an inspection, et
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default HomePage 