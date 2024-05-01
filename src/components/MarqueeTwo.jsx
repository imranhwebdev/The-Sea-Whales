import React from 'react'
import brandLogo from '../assets/img/brandlogo2.png';
import Marquee from "react-fast-marquee";
export default function MarqueeTwo() {
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