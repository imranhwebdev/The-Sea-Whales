import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ctaBg from '../assets/img/ctaBG.png';
export default function Cta() {
  return (
    <section className='cta'>
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
