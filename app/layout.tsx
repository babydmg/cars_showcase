import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components';
import { Footer } from '@/components';

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
