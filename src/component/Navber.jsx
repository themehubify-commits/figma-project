import { CiUser } from "react-icons/ci";
import { SlBag } from "react-icons/sl";




export default function Navber(){
     return (
           <>
           <div className="flex justify-between m-px bg-white-900 shadow-2xs me-[50px] p-4">
            <div className="">
                <ul className="">
                    <a href="#" className="m-[10px] text-[18px]  rounded hover:shadow-lg transition duration-400 p-3">OUR STANDARDS</a>
                    <a href="#" className="text-[18px]  rounded hover:shadow-lg transition duration-400 p-3">THE SCIENCE</a>
                    <a href="#" className="m-[10px] text-[18px]  rounded hover:shadow-lg transition duration-400 p-3">THE CREAM</a>
                </ul>
            </div>
            <div>
                <h1 className="text-[#8F6424] font-bold me-[300px]
ms-px text-3xl ">E  L  I  O R</h1>
            </div>
            <div className="flex me-[10px] gap-[30px]">
              <a href="#" className="text-[30px]  rounded hover:shadow-lg transition duration-500 p-2"> <CiUser /></a>
              <a href="#" className="text-[28px]  rounded hover:shadow-lg transition duration-500 p-2"><SlBag /></a>
            </div>
            
           </div>
           </>
       );
}