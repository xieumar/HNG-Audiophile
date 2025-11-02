"use client";
import React from 'react';
import Image from 'next/image';
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Link from 'next/link';

interface ProductDetailClientProps {
  slug: string;
}

function ProductDetailClient({ slug }: ProductDetailClientProps) {
  const product = useQuery(api.products.getProductBySlug, { slug: slug });
  console.log({ slug });

  if (!product) {
    return <div className="w-full overflow-x-hidden py-[100px] px-[25px] text-center">Product not found.</div>;
  }

  return (
    <div className="w-full overflow-x-hidden">
      <div className="mx-auto max-w-[1110px] py-[100px] px-[25px]">
        <div className="flex flex-col lg:flex-row h-auto md:h-fit items-start md:items-center gap-10 lg:gap-30">
          <picture className='rounded-lg'>
            <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
            <source media="(min-width: 768px)" srcSet={product.image.tablet} />
            <img src={product.image.mobile} alt={product.name} className='rounded-lg' />
          </picture>
          <div className="text flex flex-col gap-6 justify-center md:justify-start w-full lg:w-1/2 text-center lg:text-left px-5">
            {product.new && <h4 className='text-sm uppercase tracking-[10px] text-(--orange-dark) text-center lg:text-left'>New product</h4>}
            <h1 className='text-3xl xs:text-4xl  md:text-5xl xl:text-6xl font-semibold uppercase'>{product.name}</h1>
            <p className='text-base mx-auto md:mx-auto lg:mx-0 lg:w-2/3 tracking-wide '>{product.description}</p>
            <p className='text-lg font-bold'>$ {product.price.toLocaleString()}</p>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-10">Features</h2>
          <p className="text-base whitespace-pre-line">{product.features}</p>
        </div>
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-10">In the box</h2>
          <ul>
            {product.includes.map((item, index) => (
              <li key={index} className="flex gap-6">
                <span className="text-(--orange-dark) font-bold">{item.quantity}x</span>
                <span>{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="flex flex-col gap-5">
            <img src={product.gallery.first.mobile} alt={`${product.name} gallery 1`} className="rounded-lg" />
            <img src={product.gallery.second.mobile} alt={`${product.name} gallery 2`} className="rounded-lg" />
          </div>
          <div className="md:col-span-1 lg:col-span-2">
            <img src={product.gallery.third.mobile} alt={`${product.name} gallery 3`} className="rounded-lg h-full w-full object-cover" />
          </div>
        </div>
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-10">You may also like</h2>
          <div className="flex flex-col md:flex-row gap-5 justify-center">
            {product.others.map((otherProduct) => (
              <div key={otherProduct.slug} className="flex flex-col items-center">
                <img src={otherProduct.image.mobile} alt={otherProduct.name} className="rounded-lg w-full max-w-[350px]" />
                <h3 className="text-xl font-bold mt-5">{otherProduct.name}</h3>
                <Link href={`/${otherProduct.slug.includes('speaker') ? 'speakers' : otherProduct.slug.includes('earphones') ? 'earphones' : 'headphones'}/${otherProduct.slug}`}>
                  <p className='p-2 px-4 mt-5 uppercase bg-(--orange-dark) hover:bg-(--orange-light) cursor-pointer w-fit text-base text-white'>See product</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailClient;