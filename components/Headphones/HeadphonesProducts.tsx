import React from 'react';
import Image from 'next/image';

function HeadphonesProducts() {
  return (
    <div className='bg-(--white-light) lg:py-[150px] py-[100px] lg:px-[100px] md:px-[50px] px-[25px]'>
      <div className="mx-auto max-w-[1110px]">
        <div className="mx-auto lg:max-w-[1110px] flex flex-col gap-20 ">
          <div className="flex flex-col lg:flex-row h-auto md:h-fit items-start md:items-center gap-10 lg:gap-30">
            <picture className='rounded-lg'>
              <source media="(min-width: 1024px)" srcSet="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg" />
              <source media="(min-width: 768px)" srcSet="/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg" />
              <img src="/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg" alt="XX99 Mark II Headphones" className='rounded-lg' />
            </picture>
            <div className="text flex flex-col gap-6 justify-center md:justify-start w-full lg:w-1/2 text-center lg:text-left px-5">
              <h4 className='text-sm uppercase tracking-[10px] text-(--orange-dark) text-center lg:text-left'>New product</h4>
              <h1 className='text-3xl xs:text-4xl  md:text-5xl xl:text-6xl font-semibold uppercase'>xx99 mark ii headphones</h1>
              <p className='text-base mx-auto md:mx-auto lg:mx-0 lg:w-2/3 tracking-wide '>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
              <p className='p-2 px-4 mx-auto md:mx-auto lg:mx-0 uppercase bg-(--orange-dark) hover:bg-(--orange-light) cursor-pointer w-fit text-base'>See product</p>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row h-auto md:h-fit items-start md:items-center gap-10 lg:gap-30">
            <div className="text flex flex-col gap-6 justify-center md:justify-start w-full lg:w-1/2 text-center lg:text-left px-5">
              <h4 className='text-sm uppercase tracking-[10px] text-(--orange-dark) text-center lg:text-left'>New product</h4>
              <h1 className='text-3xl xs:text-4xl  md:text-5xl xl:text-6xl font-semibold uppercase'>xx99 mark ii headphones</h1>
              <p className='text-base mx-auto md:mx-auto lg:mx-0 lg:w-2/3 tracking-wide '>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
              <p className='p-2 px-4 mx-auto md:mx-auto lg:mx-0 uppercase bg-(--orange-dark) hover:bg-(--orange-light) cursor-pointer w-fit text-base'>See product</p>
            </div>
            <picture className='rounded-lg md:order-2'>
              <source media="(min-width: 1024px)" srcSet="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg" />
              <source media="(min-width: 768px)" srcSet="/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg" />
              <img src="/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg" alt="XX99 Mark II Headphones" className='rounded-lg' />
            </picture>
          </div>
          <div className="flex flex-col lg:flex-row h-auto md:h-fit items-start md:items-center gap-10 lg:gap-30">
            <picture className='rounded-lg'>
              <source media="(min-width: 1024px)" srcSet="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg" />
              <source media="(min-width: 768px)" srcSet="/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg" />
              <img src="/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg" alt="XX99 Mark II Headphones" className='rounded-lg' />
            </picture>
            <div className="text flex flex-col gap-6 justify-center md:justify-start w-full lg:w-1/2 text-center lg:text-left px-5">
              <h4 className='text-sm uppercase tracking-[10px] text-(--orange-dark) text-center lg:text-left'>New product</h4>
              <h1 className='text-3xl xs:text-4xl  md:text-5xl xl:text-6xl font-semibold uppercase'>xx99 mark ii headphones</h1>
              <p className='text-base mx-auto md:mx-auto lg:mx-0 lg:w-2/3 tracking-wide '>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
              <p className='p-2 px-4 mx-auto md:mx-auto lg:mx-0 uppercase bg-(--orange-dark) hover:bg-(--orange-light) cursor-pointer w-fit text-base'>See product</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    
  )
}

export default HeadphonesProducts