import React, { useEffect } from 'react';
import AOS from 'aos';
import { Col, Container, Row } from 'react-bootstrap'
import ctaBg from '../assets/img/ctaBG.png';
export default function Cta() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className='cta'>
      <Container>
        <Row>
            <Col>
                <div className="cta-content text-center">
                    <figure className='ctaBg'>
                        <img src={ctaBg} alt="" />
                    </figure>
                        <h2  data-aos="fade-up" data-aos-duration="1000">Join The Sei Whales</h2>
                        <a href="#" className='boxed-btn'  data-aos="fade-up" data-aos-duration="1300">Join Now</a>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}
