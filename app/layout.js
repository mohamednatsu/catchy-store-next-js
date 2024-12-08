"use client"
import { Poppins } from "next/font/google";
import "./globals.css";
import LayoutNavigation from "@/components/LayoutNavigation";
import Footer from "@/components/Footer";
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "@/contexts/CartContext";


const inter = Poppins({ subsets: ["latin"], weight: "300" });


export default function RootLayout({ children }) {

  return (


    <HelmetProvider>

      <html lang="en">

        <CartProvider>
          <body className={inter.className + "container"}>

            <LayoutNavigation />
            {
              children
            }
            <Footer />

          </body>
        </CartProvider>
      </html>

    </HelmetProvider>
  );
}
