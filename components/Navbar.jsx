'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">MyLogo</Link>
        </div>
        <ul className="hidden md:flex gap-6 text-lg">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link
              href="/buy">Buy</Link>
          </li>
          <li>
            <Link href="/cosmatics">Cosmatics</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}