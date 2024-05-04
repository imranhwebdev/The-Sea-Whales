import {React, useEffect} from 'react'
import AOS from 'aos';
import { Col, Container, Row } from 'react-bootstrap'
import TokenLeftImg from '../assets/img/toknomicsLeftImg.png';
import tokenRightImg from '../assets/img/toknomicsRightImg.png';
import tokenomicsBobule from '../assets/img/tokenomicsBobule.png';
export default function Toknomics() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
  return (
    <section className='toknomics' id='tokenomics'>
        <figure className='tokenomicsBobule'>
            <img src={tokenomicsBobule} alt="" />
        </figure>
        <Container>
            <Row>
                <Col lg={6} className='text-center'>
                    <div className="toknomics-content left">
                        <figure className='tokenLeftImg'>
                            <img src={TokenLeftImg} alt="" />
                        </figure>
                        <div className="inner">
                            <div className="section-title" data-aos="fade-up">
                                <h2><span>$WHALE</span> Tokenomics.</h2>
                            </div>
                            <p  data-aos="fade-up">Total Supply: <b>100 billion $WHALE</b></p>
                            <p data-aos="fade-up">Tax: <b>0/0</b></p>
                            <p  data-aos="fade-up">Secondary royalties collected from Sei Whale transactions used to periodically buy back and burn WHALE supply, pay staff, support builders and creators on SEI, marketing & other expenses</p>
                            <p className='tokenNumber d-flex'  data-aos="fade-up">CA: <b>sei1pyxztxv0fm4tdnfe4cdhm6fcalzz2zhszazq660t84sgqrnt5qqsf93m3l</b></p>
                            <div className="dual_btns" >
                                <a href="#" className="boxed-btn" data-aos="fade-up">View Chart</a>
                                <a href="#" className="boxed-btn transparent" data-aos="fade-up">Buy on Astroport</a>
                            </div>
                        </div>
                    </div>
                </Col>
                <span className='vs_and'>and</span>
                <Col lg={6} className='text-center'>
                    <div className="toknomics-content right">
                        <figure className='tokenRightImg'>
                            <img src={tokenRightImg} alt="" />
                        </figure>
                        <div className="inner">
                            <div className="section-title">
                                <h2 data-aos="fade-up" ><span>$BLUB</span> Tokenomics.</h2>
                            </div>
                            <p  data-aos="fade-up" data-aos-duration="1100">Total Supply: <b>100 billion Blub</b></p>
                            <p  data-aos="fade-up" data-aos-duration="1200">Tax: <b>0/0</b></p>
                            <p  data-aos="fade-up" data-aos-duration="1300">Secondary royalties collected from Sei Whale transactions used to periodically buy back and burn WHALE supply, pay staff, support builders and creators on SEI, marketing & other expenses</p>
                            <p className='tokenNumber d-flex'  data-aos="fade-up" data-aos-duration="1400">CA: <b>sei1pyxztxv0fm4tdnfe4cdhm6fcalzz2zhszazq660t84sgqrnt5qqsf93m3l</b></p>
                            <div className="dual_btns"  data-aos="fade-up" data-aos-duration="1500">
                                <a href="#" className="boxed-btn">View Chart</a>
                                <a href="#" className="boxed-btn transparent">Buy on Astroport</a>
                            </div>
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
