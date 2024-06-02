import { AiFillPlusCircle } from "react-icons/ai";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';




const Explore = () => {

const datas = [
  {
    "id" : "01",
    "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hhEPULBW7p7pjMHdNlEWr6iaEHIOl17T9KCNgSnjb6ELArBGXakP7UkK4NG0u-rsBWI&usqp=CAU",
    "name" : "T-Shirt",
    "description" :  "this is a shirt",
    "price" : "20.00"
  },
  {
    "id" : "02",
    "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hhEPULBW7p7pjMHdNlEWr6iaEHIOl17T9KCNgSnjb6ELArBGXakP7UkK4NG0u-rsBWI&usqp=CAU",
    "name" : "T-Shirt",
    "description" :  "this is a shirt",
    "price" : "40.00"
  },
  {
    "id" : "03",
    "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hhEPULBW7p7pjMHdNlEWr6iaEHIOl17T9KCNgSnjb6ELArBGXakP7UkK4NG0u-rsBWI&usqp=CAU",
    "name" : "T-Shirt",
    "description" :  "this is a shirt",
    "price" : "10.00"
  },
  {
    "id" : "04",
    "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hhEPULBW7p7pjMHdNlEWr6iaEHIOl17T9KCNgSnjb6ELArBGXakP7UkK4NG0u-rsBWI&usqp=CAU",
    "name" : "T-Shirt",
    "description" :  "this is a shirt",
    "price" : "30.00"
  },
  {
    "id" : "05",
    "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hhEPULBW7p7pjMHdNlEWr6iaEHIOl17T9KCNgSnjb6ELArBGXakP7UkK4NG0u-rsBWI&usqp=CAU",
    "name" : "T-Shirt",
    "description" :  "this is a shirt",
    "price" : "45.00"
  },
  {
    "id" : "06",
    "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hhEPULBW7p7pjMHdNlEWr6iaEHIOl17T9KCNgSnjb6ELArBGXakP7UkK4NG0u-rsBWI&usqp=CAU",
    "name" : "T-Shirt",
    "description" :  "this is a shirt",
    "price" : "110.00"
  },
  {
    "id" : "07",
    "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hhEPULBW7p7pjMHdNlEWr6iaEHIOl17T9KCNgSnjb6ELArBGXakP7UkK4NG0u-rsBWI&usqp=CAU",
    "name" : "T-Shirt",
    "description" :  "this is a shirt",
    "price" : "110.00"
  },
  {
    "id" : "08",
    "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hhEPULBW7p7pjMHdNlEWr6iaEHIOl17T9KCNgSnjb6ELArBGXakP7UkK4NG0u-rsBWI&usqp=CAU",
    "name" : "T-Shirt",
    "description" :  "this is a shirt",
    "price" : "110.00"
  }
]


  return (
    <div className='my-10'>
      {/* content section start */}
      <div className='container mx-auto'>
        {/* title section start */}
        <div>
          <h3 className='text-3xl font-bold'>Explore</h3>
        </div>
        {/* title section end */}
        {/* card section start */}
        <div className='my-5'>
        <Swiper
        slidesPerView={1}
        spaceBetween={13}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 13,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 13,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 13,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 13,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {datas.map((data,index) => <SwiperSlide key={index} className='bg-[#2D3639] p-4 rounded-3xl'>
          {/* item start */}
          <div className='space-y-3'>
            <div>
              <img src={data.image} className='rounded-3xl h-48 w-full'></img>
            </div>
            <div className="space-y-3">
              <ul>
                <li><span className='text-lg font-bold text-white'>{data.name}</span></li>
                <li><span className='text-gray-400 text-lg'>{data.description}</span></li>
              </ul>
              <ul className="flex justify-between items-center">
                <li className='text-base text-[#00C2C3]'>$<span>{data.price}</span></li>
                <li><AiFillPlusCircle className="text-3xl text-white"></AiFillPlusCircle></li>
              </ul>
              </div>
          </div>
          {/* item end */}
        </SwiperSlide>)}
      </Swiper>
        </div>

        {/* card section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default Explore;