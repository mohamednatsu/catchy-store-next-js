
import { data } from "@/assets/dummy-data";
import Prodcut from "@/components/Prodcut";
import Head from "next/head";
import Image from "next/image";
import { FaArrowTurnDown } from "react-icons/fa6";

export const metadata = {
  title: "Catchy Store",
  description: "Here You can find the trends style youth including hodies , pants and other"
};
function Home() {

  return (
    <div className="container flex flex-col justify-around items-center w-full my-16">
      <div className=" flex justify-start w-1/2 md:my-12 my-6 items-center gap-3 text-white">
        <h2 className="md:text-3xl text-lg md:font-light sm:font-light">
          The Most Popular <p className=" font-bold">Styles</p> in our store!

        </h2>
        <div className="flex justify-center items-center pt-10">
          <FaArrowTurnDown size={34}/>
        </div>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 my-11 gap-7 mx-6">
        {data.map((prod, key) => (
          <Prodcut key={key} product={prod} />
        ))}
      </div>
    </div>
  )
}


export default Home;