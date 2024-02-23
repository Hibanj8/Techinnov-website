import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Navbar from './_components/Navbar';
import Footer from './_components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tech Innovate',
  icons:{icon : "/logo_.ico"},
  description: 'Revolutionize your web development.Elevate your websites performance. Tech Innovate DevWeb is an advanced cloud solution tailored for developers, empowering them to construct and launch cutting-edge digital solutions with ease and efficiency. Unleash the full potential of your web architecture with Tech Innovate DevWeb'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-[#4C1D41] from-10% via-[#0B1839] via-40% to-[#4C1D41] to-90% ...`} >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

