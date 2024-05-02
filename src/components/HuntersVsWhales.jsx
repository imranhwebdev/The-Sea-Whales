import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import huntervswhals from '../assets/img/huntervswhals.png';
import hunterShap from '../assets/img/hunterShap.png';

export default function HuntersVsWhales() {
  return (
    <section className='hunter'>
      <figure className='hunterShap'>
        <img src={hunterShap} alt="" />
      </figure>
      <Container>
        <Row>
            <Col className='text-center'>
                <figure className='huntervswhals'>
                    <img src={huntervswhals} alt="" />
                </figure>
                <div className="hunter-content">
                    <h2 data-aos="fade-up" data-aos-duration="1000"><span className='hunterHeading'>hunters</span> <span className='vs'>vs</span> <span>whales</span></h2>
                    <p className='subtitle' data-aos="fade-up" data-aos-duration="1200">The Sei Whales is a collection of NFTs—unique digital collectibles on the Sei Blockchain</p>
                    <p data-aos="fade-up" data-aos-duration="1400">With more than 170 hand drawn traits, each Sei Whale is unique and comes with a membership to an exclusive group. Join our exclusive community of Sei Whales.</p>
                    <a href="#" className='boxed-btn' data-aos="fade-up" data-aos-duration="1600">JOIN OUR DISCORD</a>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}
