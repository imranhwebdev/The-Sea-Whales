import React from "react";
import { motion } from "framer-motion";
import pricelogo from '../assets/img/pricelogo.png';

import showcaseTwoImg1 from '../assets/img/showcase3Imgs/showcase2Img1.png';
import showcaseTwoImg2 from '../assets/img/showcase3Imgs/showcase2Img2.png';
import showcaseTwoImg3 from '../assets/img/showcase3Imgs/showcase2Img3.png';
import showcaseTwoImg4 from '../assets/img/showcase3Imgs/showcase2Img4.png';
import showcaseTwoImg5 from '../assets/img/showcase3Imgs/showcase2Img5.png';
const marqueeVariants = {
  animate: {
    x: [0, 1035],
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


const ShowcaseThree = () => {
    const ShowcaseThreeImgs = [
        {
            image: showcaseTwoImg1,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg2,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg3,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg4,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg5,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg1,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg2,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg3,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg4,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg5,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg1,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg2,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg3,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg4,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg5,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg1,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg2,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg3,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg4,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg5,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg1,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg2,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg3,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg4,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg5,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg1,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg2,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg3,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg4,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg5,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg1,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg2,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg3,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg4,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg5,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg1,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg2,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg3,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg4,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg5,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg1,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg2,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg3,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg4,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg5,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg1,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg2,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg3,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg4,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
        {
            image: showcaseTwoImg5,
            title: "Sei Whales",
            countNumber: '#532',
            price:"price",
            priceCount: 100,
        },
    ];
  return (
    <div>
      <div className="showcase showcaseThree mb-5">
          {ShowcaseThreeImgs.map((item, index) => (
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

export default ShowcaseThree;
