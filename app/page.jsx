

import Image from "next/image";
import { FaArrowTurnDown } from "react-icons/fa6";

// import bannerIMG from "@/assets/images/banner.png";

import ProductsList from "@/components/ProductsList";


export const metadata = {
  title: "Catchy Store",
  description: "Here You can find the trends style youth including hodies , pants and other"
};
function Home() {

  return (
    <div className="container flex flex-col justify-around items-center w-full my-16">


    {/* <div className="w-full h-1/4 flex justify-center items-center my-7">
      <Image className="w-[75%] h-1/4 rounded-md shadow-lg" alt="banner img" src={bannerIMG} />
    </div> */}
      <div className=" flex justify-start w-1/2 md:my-12 my-6 items-center gap-3 text-white">
        <h2 className="md:text-3xl text-lg md:font-light sm:font-light">
          The Most Popular <p className=" font-bold">Styles</p> in our store!

        </h2>
        <div className="flex justify-center items-center pt-10">
          <FaArrowTurnDown size={34}/>
        </div>
      </div>

      <ProductsList />
    </div>
  )
}


export default Home;