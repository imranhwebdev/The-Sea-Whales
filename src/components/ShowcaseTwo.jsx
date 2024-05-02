import React from "react";
import { motion } from "framer-motion";
import pricelogo from '../assets/img/pricelogo.png';

import showcaseImg1 from '../assets/img/showcase2Imgs/showcaseImg1.png';
import showcaseImg2 from '../assets/img/showcase2Imgs/showcaseImg2.png';
import showcaseImg3 from '../assets/img/showcase2Imgs/showcaseImg3.png';
import showcaseImg4 from '../assets/img/showcase2Imgs/showcaseImg4.png';
import showcaseImg5 from '../assets/img/showcase2Imgs/showcaseImg5.png';
const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};


const ShowcaseTwo = () => {
    const ShowcaseTwoImgs = [
        {
            image: showcaseImg1,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg2,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg3,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg4,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg5,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg1,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg2,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg3,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg4,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg5,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg1,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg2,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg3,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg4,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg5,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg1,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg2,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg3,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg4,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg5,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg1,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg2,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg3,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg4,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg5,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg1,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg2,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg3,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg4,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg5,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg1,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg2,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg3,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg4,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg5,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg1,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg2,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg3,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg4,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg5,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg1,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg2,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg3,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg4,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg5,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg1,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg2,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg3,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg4,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseImg5,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
       
    ];
  return (
    <div>
      <div className="showcase showcaseTwo ">
          {ShowcaseTwoImgs.map((item, index) => (
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
                <figure key={index} className='single-item'>
                    <img src={item.image} alt="" />
                    <div className="showcase-info d-flex justify-content-between align-items-center">
                        <div className='left'>
                            <h4>{item.title}</h4>
                            <span>{item.countNumber}</span>
                        </div>
                        <div className='right'>
                            <h4>{item.price}</h4>
                            <span d-flex justify-content-between align-items-center> <img src={pricelogo} alt="" /> {item.priceCount}</span>
                        </div>
                    </div>
                </figure>
        </motion.div>
            ))}
      </div>
    </div>
  );
};

export default ShowcaseTwo;
