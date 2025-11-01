import React from 'react';
import Image from 'next/image';

function Navbar() {
  return (
    <nav className="mx-auto max-w-[1110px] text-white py-6 border-b border-white/20">
      <div className="flex items-center justify-between">
        {/* Hamburger Icon (Tablet only) */}
        <div className="lg:hidden cursor-pointer mr-[30px]">
          <Image src="/assets/hamburger.svg" alt="Menu" width={20} height={24} />
        </div>

        {/* Logo (Always visible) */}
        <div className="flex-1 cursor-pointer lg:flex-none">
          <Image src="/assets/logo.svg" alt="Audiophile Logo" width={143} height={25} />
        </div>

        {/* Navigation Links (Desktop only) */}
        <ul className="hidden lg:flex flex-1 justify-center space-x-8 uppercase tracking-widest text-sm">
          <li><a href="#" className="hover:text-(--orange-dark)">Home</a></li>
          <li><a href="#" className="hover:text-(--orange-dark)">Headphones</a></li>
          <li><a href="#" className="hover:text-(--orange-dark)">Speakers</a></li>
          <li><a href="#" className="hover:text-(--orange-dark)">Earphones</a></li>
        </ul>

        {/* Cart Icon (Always visible) */}
        <div className="flex-1 flex justify-end cursor-pointer lg:flex-none">
          <Image src="/assets/carts.svg" alt="Cart" width={24} height={24} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
