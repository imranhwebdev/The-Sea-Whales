import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import herobg from '../assets/img/heroBg.jpg'
import heroshap from '../assets/img/hero-shap.png'
export default function Banner(){
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
                            <h1>Emerged From The Blockchain <span className='d-block'>THE SEI WHALES</span></h1>
                            <p>Guardians Of The Digital Depths.</p>
                            <div className="dual_btns">
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
