import React, { useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import aboutLeftImg from '../assets/img/aboutLeftImg.png';
export default function About(){    
    const roadmapItems = [
        {
            title: "Start Mint Blockchain",
            desc: "The blockchain oceans are home to a vast array of digital marine ecosystems,",
        },
        {
            title: "Launch MintPass",
            desc: "Mint will issue MintPass in Q1 for early-stage Mint Blockchain advocates, everyone is welcome to mint a MintPass",
        },
        {
            title: "Launch NIP Platform",
            desc: "NIP (NFT Improvement Proposal) is an innovative NFT asset protocol on Mint blockchain",
        },
        {
            title: "Launch Testnet",
            desc: "Mint will be open to all developers deploying smart contracts",
        },
    ];

    
    return(
        <section className="about">
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <div className="aboutLeft">
                            <img src={aboutLeftImg} alt="" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="about-content">
                            <Swiper
                                centeredSlides={true}
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                loop={true}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                {roadmapItems.map((item, index)=>(
                                    <SwiperSlide key={index}  className="roadmap-sinlge-item">
                                       <div className="section-title">
                                            <h2>{item.title}</h2>
                                        </div>
                                        <p>{item.desc}</p>
                                        <button className='boxed-btn'>FIND OUT MORE</button>                                       
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
