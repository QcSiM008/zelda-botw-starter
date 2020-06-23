import React, { FC } from 'react';
import { motion } from 'framer-motion';

export interface ITriangle {
  animateParams: {
    rotate: string;
    x: [number, number, number];
    y: [number, number, number];
  };
  className: string;
}

const Triangle: FC<ITriangle> = ({ animateParams, className }) => (
  <motion.div
    initial={false}
    animate={animateParams}
    transition={{
      loop: Infinity,
      ease: 'easeIn',
      duration: 1,
    }}
    className={className}
  />
);

export default Triangle;
