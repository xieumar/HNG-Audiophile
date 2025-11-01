import React from 'react'
import ProductCard from "@/components/Home/ProductCard";

function ProductCards() {
    return (
        <div className='bg-(--white-light) lg:py-[150px] py-[100px] lg:px-[100px] md:px-[50px] px-[25px]'>
            <div className="mx-auto max-w-[1110px]">
                <div className=" flex flex-col md:flex-row justify-between gap-[100px] md:gap-4 items-center">
                    <ProductCard
                        imageSrc="/assets/home/desktop/image-headphones.svg"
                        title="Headphones"
                        link="/headphones"
                    />
                    <ProductCard
                        imageSrc="/assets/home/desktop/image-speaker-zx9.svg"
                        title="Speakers"
                        link="/speakers"
                    />
                    <ProductCard
                        imageSrc="/assets/home/desktop/image-earphones.svg"
                        title="Earphones"
                        link="/earphones"
                    />
                </div>
            </div>
        </div>

    )
}

export default ProductCards