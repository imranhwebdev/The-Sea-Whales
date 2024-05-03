import {React, useEffect, Component} from 'react'
import AOS from 'aos';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
import 'swiper/css';
import { Col, Container, Row } from 'react-bootstrap'
import theseaWhels3Img from '../assets/img/theseaWhels-3Imgs.png';
import theseaWhels1 from '../assets/img/SeiWhale_Pitch_1.png';
import theseaWhels2 from '../assets/img/SeiWhale_Pitch_2.png';
import theseaWhels3 from '../assets/img/SeiWhale_Pitch_3.png';

export default function TheseaWhels() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const aboutContentItems = [
    {
      img: theseaWhels1,
    },
    {
      img: theseaWhels2,
    },
    {
      img: theseaWhels3
    },
    {
      img: theseaWhels1,
    },
    {
      img: theseaWhels2,
    },
    {
      img: theseaWhels3
    },
  ]
  return (
    <section className='theseaWhels'>
       <Swiper
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}            
            preventInteractionOnTransition= {true}
            speed= {2000}
            autoplay={{
              delay: 2000,
              disableOnInteraction:false,
            }}            
            modules={[Autoplay]}
            className="mySwiper theseaWhels3Img"
        >
            {aboutContentItems.map((item, index) => (
                <SwiperSlide key={index} className="about-sinlge-item">
                    <img src={item.img} alt="" />
                </SwiperSlide>
            ))}
        </Swiper>
      <Container>
        <Row>
            <Col>
                <div className="theseaWhels-content text-center">
                    <div className="section-title"  data-aos="fade-up" data-aos-duration="1000">
                        <h2 >The Sei <span>Whales</span></h2>
                    </div>
                    <p className='subtitle'  data-aos="fade-up" data-aos-duration="1300">The Sei Whales is a collection of NFTs—unique digital collectibles on the Sei Blockchain</p>
                    <p data-aos="fade-up" data-aos-duration="1500">With more than 170 hand drawn traits, each Sei Whale is unique and comes with a membership to an exclusive group. Join our exclusive community of Sei Whales.</p>
                    <a href="#" className='boxed-btn'  data-aos="fade-up" data-aos-duration="1700">JOIN OUR DISCORD</a>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}
