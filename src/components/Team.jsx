import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import teamBoubleShap from '../assets/img/teamBoubleShap.png';
import avaterImg1 from '../assets/img/teamImg/teamImg1.png';
import avaterImg2 from '../assets/img/teamImg/teamImg2.png';
import avaterImg3 from '../assets/img/teamImg/teamImg3.png';
import avaterImg4 from '../assets/img/teamImg/teamImg4.png';
import avaterImg5 from '../assets/img/teamImg/teamImg5.png';
import avaterImg6 from '../assets/img/teamImg/teamImg6.png';
import avaterImg7 from '../assets/img/teamImg/teamImg7.png';
import avaterImg8 from '../assets/img/teamImg/teamImg8.png';

export default function Team() {
    const TeamItems = [
        {
            avaterImg: avaterImg1,
            name: "CRYPTO FROG",
            desecnation: "Co-Founder",
            desc: "In Crypto Since 2014, Nothing He Hasn’t Seen. Semi-Famous (Infamous?) On Crypto Twitter. Semi-Retired On Crypto YouTube. Fully Committed To The Sei Whales Ecosystem And Making It The Number One Project On SEI Network."
        },
        {
            avaterImg: avaterImg2,
            name: "UN1QUE",
            desecnation: "Co-Founder",
            desc: "A Visionary In The Realm Of Blockchain Innovation Since 2019 With A Focus On Crafting Diverse Projects, Ranging From Smart Contracts To Expansive Web3 Platforms. My Passion Now Unfolds In Shaping The Next Big Thing On SEI Network."
        },
        {
            avaterImg: avaterImg3,
            name: "SIR JKP",
            desecnation: "Co-Founder",
            desc: "In Crypto Since 2017, Extensive Background In The Tech Startup World As Well As Web 3.0, Encompassing Product Development, Brand Creation, Software Engineering, Securing Funding, And Pitching. Now Building The Premier Meme On SEI."
        },
        {
            avaterImg: avaterImg4,
            name: "DEGEN",
            desecnation: "Co-Founder",
            desc: "In Crypto Since 2017, Brings Real-World Entrepreneurial Experience Spanning Diverse Businesses, Operations, And Events. Known For Adaptability, Strategic Vision, And A Passion For Pioneering Advancements In The Crypto Space."
        },
        {
            avaterImg: avaterImg5,
            name: "ROSS",
            desecnation: "Head Of Marketing",
            desc: "In Crypto Since 2021, Managed 10m+ Marketing Budgets, Onboarded 100k App Users And Built 3 Business With The Current One Doing $5M ARR. Worked With Kain And Kieran Warwick And Was Involved With Early Ideation Of Illuvium."
        },
        {
            avaterImg: avaterImg6,
            name: "MARCO",
            desecnation: "Artist",
            desc: "Skilled Ecuadorian Concept Artist Specializing In Dragons And Fantastical Creatures. After Two Years At Illuvium, Now A Lead Concept Artist At A Distinguished Canadian Studio, Where Continues To Shape Imaginative Worlds With Expertise And Vision."
        },
        {
            avaterImg: avaterImg7,
            name: "DON",
            desecnation: "Communications Lead",
            desc: "In Crypto Since 2018, Witnessing The Ocean Of Bullruns And The Meteoric Rise Of Countless Coins. A Charismatic Presence In The Community, Passionately Building Connections, Both Internally And Externally."
        },
        {
            avaterImg: avaterImg8,
            name: "HATCHY",
            desecnation: "Community Lead",
            desc: "In Crypto Since 2021, A Passionate And Dedicated GameFi, NFT And DeFi Enthusiast. Ethlizard And Illuvium Permabull, Valeria Landlord And Synthetix Simp. Here To Build The Sei Whale Community For The Long Run!"
        },
    ];
  return (
    <section className='team'>
        <figure className='teamBoubleShap'>
            <img src={teamBoubleShap} alt="" />
        </figure>
       <Container>
                <Row className='team-wrapper'>
                    {TeamItems.map((item, index)=>(
                    <Col xl={3} lg={4} md={6} className='team-single-item' key={index}>
                        <div className="team-item text-center" data-aos="fade-up" data-aos-duration="1000">
                            <div className="avater">
                                <img className='avaterImg' src={item.avaterImg} alt="" />
                            </div>
                            <div className="details">
                                <h3>{item.name} <span>{item.desecnation}</span></h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    </Col>
                    ))}
                </Row>
            </Container>
    </section>
  )
}
