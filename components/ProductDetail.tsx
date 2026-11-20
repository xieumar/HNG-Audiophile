"use client";
import React, { useState } from 'react';
import { useQuery } from "convex/react";
import { motion } from 'motion/react';
import Link from 'next/link';
import { api } from "../convex/_generated/api";
import Navbar from '@/components/Navbar';
import ProductCards from '@/components/ProductCards';
import About from '@/components/Home/About';
import Footer from '@/components/Footer';
import QuantitySelector from '@/components/QuantitySelector';
import CartModal from '@/components/CartModal';
import { useCartStore } from '@/store/cartStore';

interface ProductDetailProps {
  slug: string;
  /** Category route this page lives under, e.g. "headphones". Used for the Go Back link. */
  category: 'headphones' | 'speakers' | 'earphones';
}

const bone = 'bg-black/10 animate-pulse rounded';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function ProductDetail({ slug, category }: ProductDetailProps) {
  // undefined = still loading, null = no product with this slug
  const product = useQuery(api.products.getProductBySlug, { slug });
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);

  const loading = product === undefined;
  const name = product?.name ?? '';
  const assets = `/assets/product-${slug}`;

  if (product === null) {
    return (
      <div className="w-full overflow-x-hidden bg-(--white-light)">
        <div className="bg-black lg:px-[100px] md:px-[50px] px-[25px]"><Navbar isProductPage={true} /></div>
        <div className="mx-auto max-w-[1110px] py-[100px] px-[25px] text-center flex flex-col items-center gap-6">
          <h1 className="text-3xl font-semibold uppercase">Product not found</h1>
          <Link href={`/${category}`}>
            <p className='p-2 px-4 uppercase bg-(--orange-dark) hover:bg-(--orange-light) cursor-pointer w-fit text-base text-white'>Back to {category}</p>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-hidden bg-(--white-light)">
      <div className="bg-black lg:px-[100px] md:px-[50px] px-[25px]"><Navbar isProductPage={true} /></div>
      <div className="mx-auto max-w-[1110px] py-[35px] xl:py-[50px] xl:px-0 lg:px-[100px] md:px-[50px] px-[25px]">
        <Link href={`/${category}`}>
          <p className='text-black/50 mb-[30px] cursor-pointer hover:text-(--orange-dark)'>Go Back</p>
        </Link>

        <div className="flex flex-col md:flex-row h-auto md:h-fit items-start md:items-center gap-10 lg:gap-30">
          {/* The image only depends on the slug, so it starts downloading immediately
              instead of waiting for the product query. The wrapper reserves the exact
              space per breakpoint (654x654 / 562x960 / 1080x1120) so nothing jumps. */}
          <motion.picture
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='block rounded-lg w-full overflow-hidden bg-(--white-dark) aspect-[1/1] md:aspect-[562/960] lg:aspect-[1080/1120]'
          >
            <source media="(min-width: 1024px)" srcSet={`${assets}/desktop/image-product.jpg`} />
            <source media="(min-width: 768px)" srcSet={`${assets}/tablet/image-product.jpg`} />
            <img
              src={`${assets}/mobile/image-product.jpg`}
              alt={name}
              fetchPriority="high"
              decoding="async"
              className='rounded-lg w-full h-full object-cover'
            />
          </motion.picture>

          <div className="text flex flex-col gap-6 justify-center md:justify-start w-full text-center md:text-left px-5">
            {product ? (
              <motion.div
                variants={listVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-6"
              >
                {product.new && <motion.h4 variants={itemVariants} className='text-sm uppercase tracking-[10px] text-(--orange-dark) text-center md:text-left'>New product</motion.h4>}
                <motion.h1 variants={itemVariants} className='text-3xl xs:text-4xl md:text-5xl xl:text-6xl font-semibold uppercase'>{product.name}</motion.h1>
                <motion.p variants={itemVariants} className='text-base mx-auto md:mx-auto lg:mx-0 tracking-wide'>{product.description}</motion.p>
                <motion.p variants={itemVariants} className='text-lg font-bold'>$ {product.price.toLocaleString()}</motion.p>
                <motion.div variants={itemVariants} className="flex gap-4 justify-center md:justify-start">
                  <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />
                  <p
                    className='p-2 px-4 flex items-center uppercase bg-(--orange-dark) hover:bg-(--orange-light) cursor-pointer w-fit text-base text-white'
                    onClick={() => {
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        quantity: quantity,
                        image: `/assets/cart/image-${product.slug}.jpg`,
                      });
                      setIsCartModalOpen(true);
                    }}
                  >
                    add to cart
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-6 items-center md:items-start" aria-busy="true">
                <div className={`${bone} h-4 w-40`} />
                <div className={`${bone} h-12 w-full max-w-[420px]`} />
                <div className="flex flex-col gap-2 w-full">
                  <div className={`${bone} h-4 w-full`} />
                  <div className={`${bone} h-4 w-full`} />
                  <div className={`${bone} h-4 w-2/3`} />
                </div>
                <div className={`${bone} h-6 w-24`} />
                <div className="flex gap-4">
                  <div className={`${bone} h-10 w-[120px]`} />
                  <div className={`${bone} h-10 w-[160px]`} />
                </div>
              </div>
            )}
          </div>
        </div>
        <CartModal isOpen={isCartModalOpen} onClose={() => setIsCartModalOpen(false)} />

        <div className="mt-20 flex flex-col lg:flex-row gap-20">
          {product ? (
            <>
              <motion.div {...fadeUp} className="flex flex-col gap-10 lg:w-2/3">
                <h2 className="text-3xl font-semibold uppercase">Features</h2>
                <p className="text-base whitespace-pre-line">{product.features}</p>
              </motion.div>
              <motion.div {...fadeUp} className="flex flex-col md:flex-row lg:flex-col md:w-full gap-10 lg:w-1/3">
                <h2 className="text-3xl font-semibold uppercase md:w-1/2">In the box</h2>
                <ul>
                  {product.includes.map((item, index) => (
                    <li key={index} className="flex gap-6">
                      <span className="text-(--orange-dark) font-bold">{item.quantity}x</span>
                      <span>{item.item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-10 lg:w-2/3">
                <div className={`${bone} h-8 w-40`} />
                <div className="flex flex-col gap-3">
                  {[100, 100, 100, 90, 100, 60].map((w, i) => (
                    <div key={i} className={`${bone} h-4`} style={{ width: `${w}%` }} />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-10 lg:w-1/3">
                <div className={`${bone} h-8 w-40`} />
                <div className="flex flex-col gap-3">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className={`${bone} h-4 w-3/4`} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Gallery images only depend on the slug too, so they render straight away. */}
        <motion.div {...fadeUp} className="my-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:h-[592px]">
          <div className="flex flex-col gap-5 h-full">
            <img src={`${assets}/mobile/image-gallery-1.jpg`} width={654} height={348} loading="lazy" decoding="async" alt={`${name} gallery 1`} className="rounded-lg h-full w-full object-cover bg-(--white-dark)" />
            <img src={`${assets}/mobile/image-gallery-2.jpg`} width={654} height={348} loading="lazy" decoding="async" alt={`${name} gallery 2`} className="rounded-lg h-full w-full object-cover bg-(--white-dark)" />
          </div>
          <div className="md:col-span-1 lg:col-span-2 h-full">
            <img src={`${assets}/mobile/image-gallery-3.jpg`} width={654} height={736} loading="lazy" decoding="async" alt={`${name} gallery 3`} className="rounded-lg h-full w-full object-cover bg-(--white-dark)" />
          </div>
        </motion.div>

        <div className="text-center mt-30 lg:mt-50 xl:mt-80">
          <motion.h2 {...fadeUp} className="text-3xl font-semibold uppercase mb-10">You may also like</motion.h2>
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col md:flex-row gap-5 justify-center"
          >
            {product
              ? product.others.map((otherProduct) => (
                  <motion.div key={otherProduct.slug} variants={itemVariants} className="flex flex-col items-center">
                    <picture className='block rounded-lg w-full max-w-[350px] aspect-[654/240] md:aspect-[446/636] lg:aspect-[700/636] overflow-hidden bg-(--white-dark)'>
                      <source media="(min-width: 1024px)" srcSet={`/assets/shared/desktop/image-${otherProduct.slug}.jpg`} />
                      <source media="(min-width: 768px)" srcSet={`/assets/shared/tablet/image-${otherProduct.slug}.jpg`} />
                      <img src={`/assets/shared/mobile/image-${otherProduct.slug}.jpg`} alt={otherProduct.name} loading="lazy" decoding="async" className='rounded-lg w-full h-full object-cover' />
                    </picture>
                    <h3 className="text-xl font-bold mt-5">{otherProduct.name}</h3>
                    <Link href={`/${otherProduct.slug.includes('speaker') ? 'speakers' : otherProduct.slug.includes('earphones') ? 'earphones' : 'headphones'}/${otherProduct.slug}`}>
                      <p className='p-2 px-4 mt-5 uppercase bg-(--orange-dark) hover:bg-(--orange-light) cursor-pointer w-fit text-base text-white'>See product</p>
                    </Link>
                  </motion.div>
                ))
              : [0, 1, 2].map((i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className={`${bone} w-full max-w-[350px] aspect-[654/240] md:aspect-[446/636] lg:aspect-[700/636] rounded-lg`} />
                    <div className={`${bone} h-6 w-40 mt-5`} />
                    <div className={`${bone} h-10 w-32 mt-5`} />
                  </div>
                ))}
          </motion.div>
        </div>
      </div>
      <ProductCards />
      <About />
      <Footer />
    </div>
  );
}

export default ProductDetail;
