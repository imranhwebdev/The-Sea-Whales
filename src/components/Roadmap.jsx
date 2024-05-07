import {React } from 'react'
import 'swiper/css';
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
          <figure className="roadmapShap">
            <img src={roadMapShap} alt="" />
          </figure>
          <Row>
            <Col md={4}>
              <div className="roadmap-content-left one">
                <div className="roadmap-single-item">
                  <h4>A New Era</h4>
                  <p>5,000 Sei Whales Splash Into The Sei Blockchain Seas.</p>
                </div>
                <div className="roadmap-single-item">
                  <h4>Sei-Volution</h4>
                  <p>Royalties To Buyback And Burn The $WHALE Token. Grants To Develop The Ecosystem.</p>
                </div>
                <div className="roadmap-single-item">
                  <h4>The Pod</h4>
                  <p>Access To An Exclusive Community, Free Mints, Upcoming Projects, And Much More.</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="roadmap-content-left two">
                  <div className="roadmap-single-item">
                    <h4>The Foes</h4>
                    <p>Launch of ‘Hunters’ NFTs – mercenaries that want to kill The Sei Whales and collect their blubber (BLUB).</p>
                  </div>
                  <div className="roadmap-single-item">
                    <h4>Blub Token</h4>
                    <p>Community members will be airdropped tradable BLUB tokens as a token of appreciation for their support.</p>
                  </div>
                  <div className="roadmap-single-item">
                    <h4>Play Time</h4>
                    <p>A mini game for NFT holders play and earn BLUB tokens. For expanded game, users can fight to earn prizes and enhance their NFTs.</p>
                  </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="roadmap-content-left three">
                  <div className="roadmap-single-item">
                    <h4>The Merch</h4>
                    <p>Marketplace With Members Exclusive Merchandise.</p>
                  </div>
                  <div className="roadmap-single-item">
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
