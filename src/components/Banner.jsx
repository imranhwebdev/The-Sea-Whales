import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-scroll';
import { Col, Container, Row } from 'react-bootstrap';
import herobg from '../assets/img/heroBg.jpg';
import heroShap from '../assets/img/hero-shap.png';
import scroll from '../assets/img/scroll.svg';
import socialLogo1 from '../assets/img/discord.svg';
import socialLogo2 from '../assets/img/Envelope.svg';
import socialLogo3 from '../assets/img/twitter.svg';
import socialLogo4 from '../assets/img/telegram.svg';
// import bobule from '../assets/img/bobule.gif';

export default function Banner(){
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    const socialItems = [
        {
            socialurl: "https//www.google.com",
            socialLogo: socialLogo1,
        },
        {
            socialurl: "https//www.google.com",
            socialLogo: socialLogo2,
        },
        {
            socialurl: "https//www.google.com",
            socialLogo: socialLogo3,
        },
        {
            socialurl: "https//www.google.com",
            socialLogo: socialLogo4,
        },
    ]
    return(
        <section className="banner" id='banner'>
            <figure className='herobg'>
                <img src={herobg} alt="" />
            </figure>
            {/* <div className="heroshap">
                <img src={bobule} alt="" />
            </div> */}
            <div className="heroshap">
                <img src={heroShap} alt="" />
            </div>
            <Container>
                <Row className='justify-content-center'>
                    <Col>
                        <div className="banner-content text-center">
                            <h1 data-aos="fade-up" data-aos-duration="1000"  data-aos-offset="0">Emerged From The Blockchain <span className='d-block'>THE SEI WHALES</span></h1>
                            <p data-aos="fade-up" data-aos-duration="1300"  data-aos-offset="0">Guardians Of The Digital Depths.</p>
                            <div className="dual_btns" data-aos="fade-up" data-aos-duration="1600"  data-aos-offset="0">
                                <a href="#" className="boxed-btn">View Chart</a>
                                <a href="#" className="boxed-btn transparent">Buy $Whale </a>
                            </div>
                            <Link to="about" className='scroll'><img src={scroll} alt="" /></Link>
                        </div>
                    </Col>
                </Row>
                <ul className="social-box d-none d-sm-block">
                    {socialItems.map((item, index)=>(
                        <li key={index}><a href={item.socialurl}><img src={item.socialLogo} alt="" /></a></li>
                    ))}
                </ul>   
            </Container>
        </section>
    )
}
