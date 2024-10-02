import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Boost Abroad Website",
  icon: "/"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Open Graph Tags */}
        <meta property="og:title" content="My Website Title" />
        <meta property="og:description" content="Description of my website." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://travel-abroad-cw5m.vercel.app/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <body className={roboto.className + 'bg-white'}>
        <Header /> 
        {children}
        <Footer />
        </body>
    </html>
  );
}
