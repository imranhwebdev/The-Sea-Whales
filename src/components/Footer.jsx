import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FooterLogo from '../assets/img/footerLogo.svg'
export default function Footer(){
    const Footermenus = [
        {
            menuLink: "https://google.com",
            menuTxt: "Story",
        },
        {
            menuLink: "https://google.com",
            menuTxt: "About",
        },
        {
            menuLink: "https://google.com",
            menuTxt: "Roadmap",
        },
        {
            menuLink: "https://google.com",
            menuTxt: "Tokenomics",
        },
        {
            menuLink: "https://google.com",
            menuTxt: "Showcase",
        },
        {
            menuLink: "https://google.com",
            menuTxt: "Team",
        },
        {
            menuLink: "https://google.com",
            menuTxt: "FAQ",
        },
    ];
    return(
        <footer className="footer">
           <Container>
            <Row className='justify-content-center footer-top'>
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