"use client"
import { Poppins } from "next/font/google";
import "./globals.css";
import LayoutNavigation from "@/components/LayoutNavigation";
import Footer from "@/components/Footer";
import { HelmetProvider } from "react-helmet-async";

const inter = Poppins({ subsets: ["latin"] , weight: "300"});


export default function RootLayout({ children }) {

  return (


    <HelmetProvider>

    <html lang="en">
      
      <body className={inter.className+ "container"}>

        <LayoutNavigation />
        {
          children
        }
        <Footer />
        
        </body>
    </html>

    </HelmetProvider>
  );
}
