import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ctaBg from '../assets/img/ctaBG.png';
import ctaBubleShap from '../assets/img/ctaBubleShap.png';

export default function Cta() {
  return (
    <section className='cta'>
        <figure className='ctaBubleShap'>
            <img src={ctaBubleShap} alt="" />
        </figure>
      <Container>
        <Row>
            <Col>
                <div className="cta-content text-center">
                    <figure className='ctaBg'>
                        <img src={ctaBg} alt="" />
                    </figure>
                        <h2>Join The Sei Whales</h2>
                        <a href="#" className='boxed-btn'>Join Now</a>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}
