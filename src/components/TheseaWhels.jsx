import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import theseaWhels3Img from '../assets/img/theseaWhels-3Imgs.png';

export default function TheseaWhels() {
  return (
    <section className='theseaWhels'>
      <figure className='theseaWhels3Img'> 
        <img src={theseaWhels3Img} alt="" />
      </figure>
      <Container>
        <Row>
            <Col>
                <div className="theseaWhels-content text-center">
                    <div className="section-title">
                        <h2>The Sei <span>Whales</span></h2>
                    </div>
                    <p className='subtitle'>The Sei Whales is a collection of NFTs—unique digital collectibles on the Sei Blockchain</p>
                    <p>With more than 170 hand drawn traits, each Sei Whale is unique and comes with a membership to an exclusive group. Join our exclusive community of Sei Whales.</p>
                    <a href="#" className='boxed-btn'>JOIN OUR DISCORD</a>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}
