import React from 'react'
import brandLogo from '../assets/img/brandLogo1.png';
import Marquee from "react-fast-marquee";
import { Container, Row, Col } from 'react-bootstrap';
export default function MarqueeOne() {
    const marqueeImgs = [
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
        {
            image: brandLogo,
        },
       
    ];
    return (
        <section className="marquee">
            <Marquee direction="left" speed={100} loop={50}>
                {marqueeImgs.map((marqueeImg, index) => (
                    <figure key={index}>
                        <img src={marqueeImg.image} alt="" />
                    </figure>
                ))}
            </Marquee>
        </section>
    )
}