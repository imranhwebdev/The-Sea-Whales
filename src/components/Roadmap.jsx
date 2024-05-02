import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import roadMapShap from "../assets/img/roadMapShap.png"
import roadmapBubleShap from "../assets/img/roadmapboubleShap.png"
export default function Roadmap() {
  return (
    <section className='roadmap'>
      
        <figure className='roadmapBubleShap'>
            <img src={roadmapBubleShap} alt="" />
        </figure>
      <Container>
        <Row>
          <Col>
            <div className="section-title mb-5 pb-3 text-center text-md-start"  data-aos="fade-up" data-aos-duration="1000">
              <h2><span>Our</span> Roadmap</h2>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="roadmap-content">
        <Container>
        <div className="roadmapShap">
          <img src={roadMapShap} alt="" />
        </div>
          <Row>
            <Col sm={6}>
              <div className="roadmap-content-left">
                <div className="roadmap-single-item"  data-aos="fade-up" data-aos-duration="1000">
                  <h4>A New Era</h4>
                  <p>5,000 Sei Whales Splash Into The Sei Blockchain Seas.</p>
                </div>
                <div className="roadmap-single-item"  data-aos="fade-up" data-aos-duration="1000">
                  <h4>Sei-Volution</h4>
                  <p>Royalties To Buyback And Burn The $WHALE Token. Grants To Develop The Ecosystem.</p>
                </div>
                <div className="roadmap-single-item"  data-aos="fade-up" data-aos-duration="1000">
                  <h4>The Pod</h4>
                  <p>Access To An Exclusive Community, Free Mints, Upcoming Projects, And Much More.</p>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className="roadmap-content-right">
                <div className="roadmap-single-item"  data-aos="fade-up" data-aos-duration="1000">
                  <h4>The Merch</h4>
                  <p>Marketplace With Members Exclusive Merchandise.</p>
                </div>
                <div className="roadmap-single-item"  data-aos="fade-up" data-aos-duration="1000">
                  <h4>The Revenge</h4>
                  <p>After Years Of Being Hunted, The Sei Whales Put Their Final Plans Into Action.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}
