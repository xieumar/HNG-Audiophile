"use client";
import React from 'react';
import Navbar from '../Navbar';
import Link from 'next/link';
import { motion, type Variants } from 'motion/react';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

function Hero() {
  return (
    <div className="relative h-screen lg:h-[730px]">
      {/* Desktop Background */}
      <div
        style={{ backgroundImage: `url(/assets/home/desktop/image-hero.jpg)` }}
        className="absolute inset-0 hidden bg-no-repeat bg-center bg-cover lg:block"
      ></div>

      {/* Tablet Background */}
      <div
        style={{ backgroundImage: `url(/assets/home/tablet/image-header.jpg)` }}
        className="absolute inset-0 block bg-no-repeat bg-center bg-cover  lg:hidden"
      ></div>

      {/* Content */}
      <div className="relative z-10 h-full lg:px-[100px] md:px-[50px] px-[25px] my-auto">
        <Navbar />
        <div className="mx-auto max-w-[1110px] text-white flex items-center h-full text-center lg:text-left">
          <motion.div variants={container} initial="hidden" animate="show" className="text flex flex-col gap-6 lg:justify-start justify-center lg:w-1/2 w-full">
            <motion.h4 variants={item} className='text-sm uppercase tracking-[10px] text-(--white-light)/50'>New product</motion.h4>
            <motion.h1 variants={item} className='text-4xl xs:text-5xl md:text-6xl font-semibold uppercase'>xx99 mark ii headphones</motion.h1>
            <motion.p variants={item} className='text-base mx-auto md:mx-auto lg:mx-0 lg:w-2/3 tracking-wide text-(--white-light)/80'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</motion.p>
            <motion.div variants={item} className="w-fit mx-auto lg:mx-0">
              <Link href="/headphones/xx99-mark-two-headphones">
                <p className='p-2 px-4 uppercase bg-(--orange-dark) hover:bg-(--orange-light) cursor-pointer w-fit text-base'>See product</p>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;