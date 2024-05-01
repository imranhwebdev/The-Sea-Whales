import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import faqBubleShap from '../assets/img/faqBubleShap.png';
import Accordion from 'react-bootstrap/Accordion';
export default function Faq(){
    const accordionData = [
        {
            id:1,
            title:'WHERE CAN I VIEW MY NFTS?',
            desc:'In the boundless realm of the blockchain seas, the Sei Whales once swam with grace and majesty. These digital leviathans, traversing the Ethereum Ocean, Solana Sea, and Cardanic, were guardians of the digital depths, their presence gracing even the smaller estuaries like Avalanche and Dot. Their numbers, however, dwindled tragically due to relentless hunting, leaving only 5,000 of these magnificent creatures.',
        },
        {
            id:2,
            title:'WHAT ARE THE SEI WHALES?',
            desc:'In the boundless realm of the blockchain seas, the Sei Whales once swam with grace and majesty. These digital leviathans, traversing the Ethereum Ocean, Solana Sea, and Cardanic, were guardians of the digital depths, their presence gracing even the smaller estuaries like Avalanche and Dot. Their numbers, however, dwindled tragically due to relentless hunting, leaving only 5,000 of these magnificent creatures.',
        },
        {
            id:3,
            title:'WHY DO WE NEED ROYALTIES?',
            desc:'In the boundless realm of the blockchain seas, the Sei Whales once swam with grace and majesty. These digital leviathans, traversing the Ethereum Ocean, Solana Sea, and Cardanic, were guardians of the digital depths, their presence gracing even the smaller estuaries like Avalanche and Dot. Their numbers, however, dwindled tragically due to relentless hunting, leaving only 5,000 of these magnificent creatures.',
        },
        {
            id:4,
            title:'HOW CAN I USE MY NFT?',
            desc:'In the boundless realm of the blockchain seas, the Sei Whales once swam with grace and majesty. These digital leviathans, traversing the Ethereum Ocean, Solana Sea, and Cardanic, were guardians of the digital depths, their presence gracing even the smaller estuaries like Avalanche and Dot. Their numbers, however, dwindled tragically due to relentless hunting, leaving only 5,000 of these magnificent creatures.',
        },
        {
            id:5,
            title:'HOW DO THE SEI WHALES HELP $WHALE TOKEN?',
            desc:'In the boundless realm of the blockchain seas, the Sei Whales once swam with grace and majesty. These digital leviathans, traversing the Ethereum Ocean, Solana Sea, and Cardanic, were guardians of the digital depths, their presence gracing even the smaller estuaries like Avalanche and Dot. Their numbers, however, dwindled tragically due to relentless hunting, leaving only 5,000 of these magnificent creatures.',
        },
        {
            id:6,
            title:'HOW DO I BUY $WHALE?',
            desc:'In the boundless realm of the blockchain seas, the Sei Whales once swam with grace and majesty. These digital leviathans, traversing the Ethereum Ocean, Solana Sea, and Cardanic, were guardians of the digital depths, their presence gracing even the smaller estuaries like Avalanche and Dot. Their numbers, however, dwindled tragically due to relentless hunting, leaving only 5,000 of these magnificent creatures.',
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
                                    <Accordion.Item key={item.id} eventKey={item.id.toString()}>
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
