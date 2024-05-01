import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TokenLeftImg from '../assets/img/toknomicsLeftImg.png';
import tokenRightImg from '../assets/img/toknomicsRightImg.png';
import tokenomicsBobule from '../assets/img/tokenomicsBobule.png';
export default function Toknomics() {
  return (
    <section className='toknomics'>
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
                            <div className="section-title">
                                <h2><span>$WHALE</span> Tokenomics.</h2>
                            </div>
                            <p>Total Supply: <b>100 billion $WHALE</b></p>
                            <p>Tax: <b>0/0</b></p>
                            <p>Secondary royalties collected from Sei Whale transactions used to periodically buy back and burn WHALE supply, pay staff, support builders and creators on SEI, marketing & other expenses</p>
                            <p className='tokenNumber d-flex'>CA: <b>sei1pyxztxv0fm4tdnfe4cdhm6fcalzz2zhszazq660t84sgqrnt5qqsf93m3l</b></p>
                            <div className="dual_btns">
                                <a href="#" className="boxed-btn">View Chart</a>
                                <a href="#" className="boxed-btn transparent">Buy on Astroport</a>
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
                                <h2><span>$BLUB</span> Tokenomics.</h2>
                            </div>
                            <p>Total Supply: <b>100 billion Blub</b></p>
                            <p>Tax: <b>0/0</b></p>
                            <p>Secondary royalties collected from Sei Whale transactions used to periodically buy back and burn WHALE supply, pay staff, support builders and creators on SEI, marketing & other expenses</p>
                            <p className='tokenNumber d-flex'>CA: <b>sei1pyxztxv0fm4tdnfe4cdhm6fcalzz2zhszazq660t84sgqrnt5qqsf93m3l</b></p>
                            <div className="dual_btns">
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
