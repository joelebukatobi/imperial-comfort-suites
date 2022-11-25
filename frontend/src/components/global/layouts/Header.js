// React
import { useState } from 'react';
// Next JS
import Link from 'next/link';
// Components
import Navbar from '@/global//layouts/Navbar';
import Container from '@/global//layouts/Container';

export default function Header({ className, children }) {
  return (
    <div className={`header ${className}`}>
      <Navbar />
      {children}
    </div>
  );
}
