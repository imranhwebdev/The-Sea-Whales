import React from "react";
import { motion } from "framer-motion";
import brandLogo from '../assets/img/brandLogo1.png';
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


const ShowcaseOne = () => {
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
    <div>
      <div className="showcase showcaseOne ">
          {marqueeImgs.map((item, index) => (
            <motion.div
            className="track"
            variants={marqueeVariants}
            animate="animate"
            >
                <figure key={index} className='single-item'>
                    <img src={item.image} alt="" />
                </figure>
        </motion.div>
            ))}
      </div>
    </div>
  );
};

export default ShowcaseOne;
