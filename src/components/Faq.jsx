import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { Col, Container, Row } from 'react-bootstrap'
import faqBubleShap from '../assets/img/faqBubleShap.png';
import Accordion from 'react-bootstrap/Accordion';
export default function Faq(){
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    const accordionData = [
        {
            id:1,
            title:'WHERE CAN I VIEW MY NFTS?',
            desc:'Once minted or bought simply connect to your Pallet account to view your NFTs.',
        },
        {
            id:2,
            title:'WHAT ARE THE SEI WHALES?',
            desc:'In the boundless realm of the blockchain seas, the Sei Whales once swam with grace and majesty. These digital leviathans, traversing the Ethereum Ocean, Solana Sea, and Cardanic, were guardians of the digital depths, their presence gracing even the smaller estuaries like Avalanche and Dot. Their numbers, however, dwindled tragically due to relentless hunting, leaving only 5,000 of these magnificent creatures.',
        },
        {
            id:3,
            title:'WHY DO WE NEED ROYALTIES?',
            desc:'The amount of royalties is fixed at 5% to buy back and burn the $WHALE token, enable donations for artists, creatives and builders on SEI and to pay our team.',
        },
        {
            id:4,
            title:'HOW CAN I USE MY NFT?',
            desc:'You can use your Sei Whale however you please - as your pfp, as your placeholder to The Pod, or simply to trade. However, holding means you are part of an exclusive network of investors and entrepreneurs within the SEI ecosystem.',
        },
        {
            id:5,
            title:'HOW DO THE SEI WHALES HELP $WHALE TOKEN?',
            desc:'The Sei Whales plan to exact their revenge includes buying back and burning the WHALE token to avenge their fallen brothers. Each secondary transaction provides royalities that are used to slash and burn the supply of the $WHALE token.',
        },
        {
            id:6,
            title:'HOW DO I BUY $WHALE?',
            desc:'Investors will need SEI in their Compass Wallet to buy WHALE from Astroport or Coinhall. Most people on SEI use the Compass Wallet. You can either send SEI from a CEX to your wallet or bridge over. The contract address is:',
        },
    ];


    const [activeKey, setActiveKey] = useState(accordionData[0].id.toString());

    const handleAccordionSelect = (selectedKey) => {
        setActiveKey(selectedKey);
    };

    const SectionTitle = "FAQs";
    return(
        <div className="faq__area" id='faq'>
            <figure className='faqBubleShap'>
                <img src={faqBubleShap} alt="" />
            </figure>
            <Container>
                <Row>
                    <Col>
                        <div className="section__title text-center">
                            <h2>{SectionTitle}</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="faq__wrapper">
                            <Accordion onSelect={handleAccordionSelect}>
                                {accordionData.map((item) => (
                                    <Accordion.Item key={item.id} eventKey={item.id.toString()}  data-aos="fade-up" data-aos-duration="1000">
                                        <Accordion.Header className={activeKey === item.id.toString() ? 'active' : ''}>
                                            {item.title}
                                        </Accordion.Header>
                                        <Accordion.Body>{item.desc}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </Col>
                </Row>  
            </Container>
        </div>     
    )
}
