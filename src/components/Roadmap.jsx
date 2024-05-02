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
            <div className="section-title mb-5 pb-3 text-center text-md-start">
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
                <div className="roadmap-single-item">
                  <h4>A New Era</h4>
                  <p>5,000 Sei Whales Splash Into The Sei Blockchain Seas.</p>
                </div>
                <div className="roadmap-single-item">
                  <h4>A New Era</h4>
                  <p>5,000 Sei Whales Splash Into The Sei Blockchain Seas.</p>
                </div>
                <div className="roadmap-single-item">
                  <h4>A New Era</h4>
                  <p>5,000 Sei Whales Splash Into The Sei Blockchain Seas.</p>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className="roadmap-content-right">
                <div className="roadmap-single-item">
                  <h4>A New Era</h4>
                  <p>5,000 Sei Whales Splash Into The Sei Blockchain Seas.</p>
                </div>
                <div className="roadmap-single-item">
                  <h4>A New Era</h4>
                  <p>5,000 Sei Whales Splash Into The Sei Blockchain Seas.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}
