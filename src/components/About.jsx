import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import aboutLeftImg from '../assets/img/aboutLeftImg.png';

export default function About() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);

    const aboutContentItems = [
        {
            title: "<span>Revenge</span> Of The Sei Whales.",
            desc:  `<p>The blockchain oceans are home to a vast array of digital marine ecosystems, seas within smaller seas and secret hidden worlds. As humans pottered away in the real world, tinkering with archaic technology and petty politics, the mega systems of the blockchain oceans evolved, devolved and revolved flowing in and out in a symbiotic, yet simultaneously independent way. </p> 
            <p> Like their human counterparts, real life whales were also mammals with advanced intelligence. However, whales maintained a dignity well beyond that of the common ape. Whales, real whales, were becoming sick of being hunted for consumption, and thus they decided to evolve into the blockchain and finally liberate themselves from apes and reptiles alike. </p> 
            
            <p> It is in this underwater digital expanse that the Sei Whales emerged, mammalian at first, then blockchainian. They minted themselves into the blockchain to escape the onslaught of human consumption altogether. By digitising themselves, their DNA became encoded, their survival safe guarded. In the vast expanse of the blockchain oceans, the Sei Whales roamed with dignity. 
            </p> 
            <p>These digital titans traversed the Ethereum Expanse, the Solana Sea, Cardanic Coral Enclaves and even into smaller estuaries like the Avalanche and Dot. However, once again, as had been the case with their past evolutions, the spectre of greed manifested once more and once again these majestic creatures were hunted to the point of extinction. Their numbers dwindled yet again, leaving only 5,000.</p> `,
        },
        {
            title: "<span>Revenge</span> Of The Sei Whales.",
            desc: `<p> The blockchain oceans are home to a vast array of digital marine ecosystems, seas within smaller seas and secret hidden worlds. As humans pottered away in the real world, tinkering with archaic technology and petty politics, the mega systems of the blockchain oceans evolved, devolved and revolved flowing in and out in a symbiotic, yet simultaneously independent way. </p> 
            <p>Like their human counterparts, real life whales were also mammals with advanced intelligence. However, whales maintained a dignity well beyond that of the common ape. </p>
            <p>Whales, real whales, were becoming sick of being hunted for consumption, and thus they decided to evolve into the blockchain and finally liberate themselves from apes and reptiles alike.</p>
            `,
        },
        {
            title: "<span>Revenge</span> Of The Sei Whales.",
            desc: `
                <p>It is in this underwater digital expanse that the Sei Whales emerged, mammalian at first, then blockchainian. They minted themselves into the blockchain to escape the onslaught of human consumption altogether. By digitising themselves, their DNA became encoded, their survival safe guarded. In the vast expanse of the blockchain oceans, the Sei Whales roamed with dignity.</p>
                <p>These digital titans traversed the Ethereum Expanse, the Solana Sea, Cardanic Coral Enclaves and even into smaller estuaries like the Avalanche and Dot. However, once again,as had been the case with their past evolutions, the spectre of greed manifested once more and once again these majestic creatures were hunted to the point of extinction. Their numbers dwindled yet again, leaving only 5,000.</p>
            `,
        },
        {
            title: "<span>Revenge</span> Of The Sei Whales.",
            desc: `
            <p>Their true salvation however came via the mystical Sei Sea, a realm of untold power and mystery. It was here that the surviving Sei Whales found refuge, and much more. The Sei Sea's enchanted waters had a transformative power, granting the whales abilities beyond their wildest imaginations. As the whales bathed in the enchanted waters, they underwent a wondrous metamorphosis.</p>
            <p>Each whale emerged with unique traits, 172 in total across the 5,000 whales. Some grew ethereal fins that glowed with the light of smart contracts, while others developed eyes that could see through the deepest layers of the blockchain.</p>
            <p>There were whales with skin as hard as the toughest cryptographic algorithms, and those who sang melodies that could manipulate the very fabric of the digital seas.</p>
        `,
        },
        {
            title: "<span>Revenge</span> Of The Sei Whales.",
            desc: `
            <p>These mutations not only made them powerful but also incredibly diverse. Each Sei Whale became a one-of-a-kind digital entity, a living NFT with its own set of rare and unique attributes. They emerged not just as survivors but as evolved beings with anthropomorphic forms, an enhanced intelligence, equipped to walk on land and hide in plain sight among humans in the real world.</p>
            <p>In their new forms, the Sei Whales returned and manifested once again in flesh as whale disguised as human moving among humans, while others developed eyes that could see through the deepest layers of the blockchain.</p>
            <p> There were whales with skin as hard as the toughest cryptographic algorithms, and those who sang melodies that could manipulate the very fabric of the digital seas.</p>
        `,
        },
        {
            title: "<span>Revenge</span> Of The Sei Whales.",
            desc: `
            <p>Now back in the real world, and back on land they harnessed an acute understanding of the world of finance, particularly the intricate web of the cryptocurrency markets. With their superior intellect, they began to amass a fortune, trading and manipulating the crypto markets with unparalleled skill. </p>
            <p>Their aim was singular and fueled by a deep-seated desire for retribution: to amass enough power and resources to wage a war of revenge against those who had hunted them. And not only that, all that swimming had made them hungry…</p>
        `,
        },
        {
            title: "<span>Revenge</span> Of The Sei Whales.",
            desc: `
            <p>As the legend of the Sei Whales spread in hushed tones across the digital and physical realms, their NFTs became symbols of this covert uprising. Each NFT, representing one of the 5,000 Sei Whales, was a piece of a grander narrative, a token of a future revolution.</p>
            <p>Collectors and enthusiasts, drawn to the rarity and mystique of these NFTs, were unknowingly aiding in the build-up of the Sei Whales' war chest. However, it would only be a matter of time before enthusiasts would begin to notice the very peculiar book of recipes carried by each whale… a book of recipes that turned man into burger.</p>
        `,
        },
    ];

    return (
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
                            <Swiper
                                centeredSlides={true}
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                loop={true}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                {aboutContentItems.map((item, index) => (
                                    <SwiperSlide key={index} className="about-sinlge-item">
                                        <div className="section-title">
                                            <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                                        </div>
                                        <p dangerouslySetInnerHTML={{ __html: item.desc }} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
