import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Cart = () => {

  // quantity
  const [quantity, setQuantity] = useState(1);

  //toggle button
  const [open, setOpen] = useState(false)

  const datas = [
    {
      "id" : "01",
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hhEPULBW7p7pjMHdNlEWr6iaEHIOl17T9KCNgSnjb6ELArBGXakP7UkK4NG0u-rsBWI&usqp=CAU",
      "name" : "T-Shirt",
      "description" :  "this is a shirt",
      "price" : "20.00",
    },
    {
      "id" : "02",
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hhEPULBW7p7pjMHdNlEWr6iaEHIOl17T9KCNgSnjb6ELArBGXakP7UkK4NG0u-rsBWI&usqp=CAU",
      "name" : "T-Shirt",
      "description" :  "this is a shirt",
      "price" : "40.00",
    },
    {
      "id" : "03",
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hhEPULBW7p7pjMHdNlEWr6iaEHIOl17T9KCNgSnjb6ELArBGXakP7UkK4NG0u-rsBWI&usqp=CAU",
      "name" : "T-Shirt",
      "description" :  "this is a shirt",
      "price" : "10.00",
    },
    {
      "id" : "04",
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hhEPULBW7p7pjMHdNlEWr6iaEHIOl17T9KCNgSnjb6ELArBGXakP7UkK4NG0u-rsBWI&usqp=CAU",
      "name" : "T-Shirt",
      "description" :  "this is a shirt",
      "price" : "30.00",
    },
    {
      "id" : "05",
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hhEPULBW7p7pjMHdNlEWr6iaEHIOl17T9KCNgSnjb6ELArBGXakP7UkK4NG0u-rsBWI&usqp=CAU",
      "name" : "T-Shirt",
      "description" :  "this is a shirt",
      "price" : "45.00",
    },
    {
      "id" : "06",
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hhEPULBW7p7pjMHdNlEWr6iaEHIOl17T9KCNgSnjb6ELArBGXakP7UkK4NG0u-rsBWI&usqp=CAU",
      "name" : "T-Shirt",
      "description" :  "this is a shirt",
      "price" : "110.00",
      "quantity" : 1
    },
    {
      "id" : "07",
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hhEPULBW7p7pjMHdNlEWr6iaEHIOl17T9KCNgSnjb6ELArBGXakP7UkK4NG0u-rsBWI&usqp=CAU",
      "name" : "T-Shirt",
      "description" :  "this is a shirt",
      "price" : "110.00",
    },
    {
      "id" : "08",
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hhEPULBW7p7pjMHdNlEWr6iaEHIOl17T9KCNgSnjb6ELArBGXakP7UkK4NG0u-rsBWI&usqp=CAU",
      "name" : "T-Shirt",
      "description" :  "this is a shirt",
      "price" : "110.00",
    }
  ]

  const incrementBtn = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementBtn = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };


  return (
    <div className="mt-20">
      {/* content section start */}
      <div className="container mx-auto">
        {/* main section start */}
        <div className="md:flex justify-between gap-2 md:gap-5">
          {/* item table section start */}
          <div className="w-full md:w-[70%]">
          <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Check</th>
        <th>Name</th>
        <th className="hidden md:block">Details</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        datas.map((data, index) => <tr key={index}>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={data.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{data.name}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td className="hidden md:block">
          {data.description}
        </td>
        <td>
        <div className="flex items-center gap-2 border-[2px] border-black rounded-3xl justify-center w-full sm:w-1/2 md:w-full lg:w-2/3 xl:w-1/2">
      <FaPlus className="text-xs sm:text-sm md:text-xs lg:text-base" onClick={incrementBtn} />
      <span>{quantity}</span>
      <FaMinus className="text-xs sm:text-sm md:text-xs lg:text-base" onClick={decrementBtn} />
    </div>
        </td>
      </tr>)
      }
    </tbody>
  </table>
          </div>
          {/* item table section end */}
          {/* desktop card section start */}
          <div className="bg-gray-500 hidden md:block md:w-[30%] space-y-3 p-5 md:p-3 lg:p-5 rounded-3xl h-1/2">
            <ul>
              <li className="flex justify-between items-center text-sm xl:text-lg "><span className="text-white">Selected Items</span><span className="text-[#00C2C3]">$235.00</span></li>
              <li className="flex justify-between items-center text-sm xl:text-lg "><span className="text-white">Shipping Fee</span><span className="text-[#00C2C3]">$235.00</span></li>
              
            </ul>
            <div className="divider"></div>
            <p className="flex justify-between items-center text-sm xl:text-xl font-bold"><span className="text-slate-200">Selected Items</span><span className="text-[#00C2C3]">$235.00</span></p>
            <button className="btn w-full bg-[#00C2C3] hover:bg-[#00C2C3] border-0 outline-none text-white rounded-3xl">Checkout</button>
          </div>
          {/* desktop card section end */}
        </div>
        {/* main section end */}
      </div>
      {/* mobile card section start */}
      <div className={`md:hidden w-full bg-white top-0 ${open ? 'right-0 p-9': '-right-[100%] p-6'} bottom-0 flex items-center z-30 fixed  duration-300`}>
        <div className="absolute z-10 top-[50%] -ml-11 bg-gray-400 rounded-full">
          {
            open ? <FaAngleRight onClick={() => setOpen(!open)} className="text-3xl"></FaAngleRight>:<FaAngleLeft onClick={() => setOpen(!open)} className="text-3xl"></FaAngleLeft>
          }
          
          
        </div>
        <div className="bg-gray-500 w-full space-y-3 p-5 md:p-3 lg:p-5 rounded-3xl h-1/2">
        <ul>
                <li className="flex justify-between items-center text-sm xl:text-lg "><span className="text-white">Selected Items</span><span className="text-[#00C2C3]">$235.00</span></li>
                <li className="flex justify-between items-center text-sm xl:text-lg "><span className="text-white">Shipping Fee</span><span className="text-[#00C2C3]">$235.00</span></li>
                
              </ul>
              <div className="divider"></div>
              <p className="flex justify-between items-center text-sm xl:text-xl font-bold"><span className="text-slate-200">Selected Items</span><span className="text-[#00C2C3]">$235.00</span></p>
              <button className="btn w-full bg-[#00C2C3] hover:bg-[#00C2C3] border-0 outline-none text-white rounded-3xl">Checkout</button>
        </div>
      </div>
      
      {/* mobile card section end */}
      {/* content section end */}
    </div>
  );
};

export default Cart;