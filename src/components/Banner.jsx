import {React, useEffect} from 'react'
import AOS from 'aos';
import { Col, Container, Row } from 'react-bootstrap'
import herobg from '../assets/img/heroBg.jpg'
import heroshap from '../assets/img/hero-shap.png'
export default function Banner(){
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    return(
        <section className="banner">
            <figure className='herobg'>
                <img src={herobg} alt="" />
            </figure>
            <div className="heroshap">
                <img src={heroshap} alt="" />
            </div>
            <Container>
                <Row className='justify-content-center'>
                    <Col>
                        <div className="banner-content text-center">
                            <h1 data-aos="fade-up" data-aos-duration="1000"  data-aos-offset="0">Emerged From The Blockchain <span className='d-block'>THE SEI WHALES</span></h1>
                            <p data-aos="fade-up" data-aos-duration="1300"  data-aos-offset="0">Guardians Of The Digital Depths.</p>
                            <div className="dual_btns" data-aos="fade-up" data-aos-duration="1600"  data-aos-offset="0">
                                <a href="#" className="boxed-btn">Launch the app</a>
                                <a href="#" className="boxed-btn transparent">Buy $Whale </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
