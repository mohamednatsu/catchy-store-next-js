
import { data } from "@/assets/dummy-data";
import Prodcut from "@/components/Prodcut";
import Image from "next/image";
import { FaArrowTurnDown } from "react-icons/fa6";

function Home() {
  return (
    <div className="container flex flex-col justify-around items-center w-full my-16">
      <div className=" flex justify-start w-1/2 my-12 items-center gap-3 text-white">
        <h2 className="text-3xl font-light ">
          The Most Popular <b className=" font-bold">Styles</b> in our store!
        </h2>
        <div className="flex justify-center items-center pt-10">
          <FaArrowTurnDown size={34}/>
        </div>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 my-11 gap-7">
        {data.map((prod) => (
          <Prodcut product={prod} />
        ))}
      </div>
    </div>
  )
}


export default Home;