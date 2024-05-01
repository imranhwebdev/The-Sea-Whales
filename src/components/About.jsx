import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import aboutLeftImg from '../assets/img/aboutLeftImg.png';
export default function About(){
    const aboutDesc = [
        {
            desc: "The blockchain oceans are home to a vast array of digital marine ecosystems, seas within smaller seas and secret hidden worlds. As humans pottered away in the real world, tinkering with archaic technology and petty politics, the mega systems of the blockchain oceans evolved, devolved and revolved flowing in and out in a symbiotic, yet simultaneously independent way.",
        },
        {
            desc: "Like their human counterparts, real life whales were also mammals with advanced intelligence. However, whales maintained a dignity well beyond that of the common ape. Whales, real whales, were becoming sick of being hunted for consumption, and thus they decided to evolve into the blockchain and finally liberate themselves from apes and reptiles alike.",
        },
        {
            desc: "It is in this underwater digital expanse that the Sei Whales emerged, mammalian at first, then blockchainian. They minted themselves into the blockchain to escape the onslaught of human consumption altogether. By digitising themselves, their DNA became encoded, their survival safe guarded. In the vast expanse of the blockchain oceans, the Sei Whales roamed with dignity. ",
        },
        {
            desc: "These digital titans traversed the Ethereum Expanse, the Solana Sea, Cardanic Coral Enclaves and even into smaller estuaries like the Avalanche and Dot. However, once again, as had been the case with their past evolutions, the spectre of greed manifested once more and once again these majestic creatures were hunted to the point of extinction. Their numbers dwindled yet again, leaving only 5,000.",
        },
    ];
    const desc = "<p> <strong>At OxHash,</strong> we take pride in offering a comprehensive asset ecosystem that empowers users to diversify and optimize their portfolios effortlessly. </p>";
    return(
        <section className="about">
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <div className="aboutLeft">
                            <img src={aboutLeftImg} alt="" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="about-content">
                            <div className="section-title">
                                <h2><span>Revenge</span> Of The Sei Whales.</h2>
                            </div>
                            {aboutDesc.map((item, index)=>(
                                <p>{item.desc}</p>
                            ))}
                            <a href="#" className='boxed-btn'>FIND OUT MORE</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
