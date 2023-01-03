import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css';
import client1 from "../../assets/clients1.png"
import './Clients.scss'
import { motion } from 'framer-motion';
const Clients = () => {
    return (
        <section className='clientsSection'>
            <Container className='text-center text-md-start'>
                <motion.div initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }} className="overflow-hidden">
                    <h2 className='scrollAnim'>
                        Our Projects
                    </h2>
                </motion.div>
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
                                <Card.Title>Design Electric Co</Card.Title>
                                <Card.Subtitle>Bamboohr</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <Card.Img variant="top" src={client1} />
                            <Card.Body>
                                <Card.Title>Construoction</Card.Title>
                                <Card.Subtitle>Rhumbix</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </section>
    )
}

export default Clients
