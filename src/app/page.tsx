import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import bg from '../../public/bg.jpeg'
import Welcome from "@/components/Welcome";
export default function Home() {
  return (
    <>
    <div className="w-screen h-screen flex-wrap bg-gray-100 p-3">
    <Navbar/>
    <Image className="w-full h-[550px] py-4 mt-2 rounded-[40px]"  src={bg} alt="bg"/>
    <div className="absolute z-50">
      <Welcome/>
    </div>
    </div>
    </>
  );
}
