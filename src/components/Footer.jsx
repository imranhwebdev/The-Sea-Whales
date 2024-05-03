import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FooterLogo from '../assets/img/FooterLogo.png'
export default function Footer(){
    const Footermenus = [
        {
            menuLink: "#",
            menuTxt: "Story",
        },
        {
            menuLink: "#about",
            menuTxt: "About",
        },
        {
            menuLink: "#roadmap",
            menuTxt: "Roadmap",
        },
        {
            menuLink: "#tokenomics",
            menuTxt: "Tokenomics",
        },
        {
            menuLink: "#showcase",
            menuTxt: "Showcase",
        },
        {
            menuLink: "#team",
            menuTxt: "Team",
        },
        {
            menuLink: "#faq",
            menuTxt: "FAQ",
        },
    ];
    return(
        <footer className="footer">
           <Container>
            <Row className='justify-content-center footer-top align-items-center'>
                <Col lg={3} md={4}>
                    <div className="footer-left text-center text-md-start">
                        <a href="/" className='footer-logo'>
                            <img src={FooterLogo} alt="" />
                        </a>
                    </div>
                </Col>
                <Col lg={9} md={8}>
                    <ul className="footer-menu mt-2 mt-md-0">
                        {Footermenus.map((item,index)=>(
                            <li key={index}><a target='_blank' href="#">{item.menuTxt}</a></li>
                        ))}
                    </ul>
                </Col>
            </Row>
            
            <Row className='footer-bottom'>
                <Col className='text-center'>
                    <p className='copyright'>© 2024 Sei Whales. All rights reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>
    )
}