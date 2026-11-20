"use client";
import React from 'react';
import { motion } from 'motion/react';
import ProductCard from "@/components/Home/ProductCard";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function ProductCards() {
  const products = useQuery(api.products.getAll);

  if (!products) {
    // Same wrapper and card size (350x205) as the loaded state, so nothing shifts
    return (
      <div className='bg-(--white-light) lg:py-[150px] py-[100px] lg:px-[100px] px-[50px]' aria-busy="true">
        <div className="mx-auto max-w-[1110px]">
          <div className="flex flex-col md:flex-row justify-between gap-[100px] md:gap-4 items-center">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-[350px] max-w-full h-[205px] rounded-lg bg-black/10 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const desiredOrder = ["headphones", "speakers", "earphones"];

  const categories = desiredOrder.map(categoryName => {
    let imageSrc = "";
    // Assign image based on category
    if(categoryName === "earphones") {
      imageSrc = "/assets/home/desktop/image-earphones.svg";
    }  else if (categoryName === "speakers") {
      imageSrc = "/assets/home/desktop/image-speaker-zx9.png";
    } else if (categoryName === "headphones") {
      imageSrc = "/assets/home/desktop/image-headphones.svg";
    }
    return {
      imageSrc,
      title: categoryName,
      link: `/${categoryName}`,
    };
  });

  return (
    <div className='bg-(--white-light) lg:py-[150px] py-[100px] lg:px-[100px] px-[50px] '>
      <div className="mx-auto max-w-[1110px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className=" flex flex-col md:flex-row justify-between gap-[100px] md:gap-4 items-center"
        >
          {categories.map((categoryData) => (
            <ProductCard
              key={categoryData.title}
              imageSrc={categoryData.imageSrc}
              title={categoryData.title}
              link={categoryData.link}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default ProductCards;