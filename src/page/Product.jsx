import food from '../../public/img/food.png'
import { GiSelfLove } from "react-icons/gi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";


function Product() {
    return (
        <>
            <div className="h-screen white">
                <div className="h-3/6 relative">
                    <div className="absolute left-0 right-0 top-6">
                        <div className="px-4 flex justify-between">
                            <button className="text-white text-2xl "><FaArrowLeftLong /></button>
                            <h3 className='text-white font-bold text-2xl'>Product</h3>
                            <button className="text-white text-2xl hover:border p-2 rounded-full"><GrCart /></button>
                        </div>
                    </div>
                    <img className='w-full h-full rounded-bl-[50px]' src={food} alt="Product image" />
                    <div className="absolute bottom-[-20px] left-0 right-0 ">
                        <div className="flex justify-end me-4">
                            <button className="btn btn-neutral btn-circle rounded-full "><GiSelfLove className='text-xl text-red-400' /></button>
                        </div>
                    </div>
                </div>
                {/* bottom content  */}
                <div className="h-3/6 blue">
                    hallo
                </div>
            </div>


        </>
    )
}

export default Product
