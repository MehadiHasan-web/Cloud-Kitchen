import food from '../../public/img/food.png'
import { GiSelfLove } from "react-icons/gi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { FaStar } from "react-icons/fa6";



// swiper js 
import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';
import { Autoplay, } from 'swiper/modules';

function Product() {

    // swiper js 
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <>
            <div className="h-screen white hidden">
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
                            <button className="btn btn-neutral btn-circle rounded-full btn-shadow"><GiSelfLove className='text-xl text-red-400' /></button>
                        </div>
                    </div>
                </div>
                {/* bottom content  */}
                <div className="h-3/6 blue">
                    hallo
                </div>
            </div>
            {/* main section  */}
            <div className="white-bg">
                <div className="h-screen container mx-auto pt-4">
                    <div className="grid grid-cols-2">
                        <div>
                            <div className='px-6 h-96'>
                                <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Autoplay,]}
                                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                                    className="mySwiper"
                                >
                                    <SwiperSlide className='rounded'>
                                        <img className='rounded' src={food} alt="image" />
                                    </SwiperSlide>
                                    <SwiperSlide className='rounded'>
                                        <img className='rounded' src="https://plus.unsplash.com/premium_photo-1665394004212-0d014eb6da68?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 2" />
                                    </SwiperSlide>
                                    <SwiperSlide className='rounded'>
                                        <img className='rounded' src="https://images.unsplash.com/photo-1556911261-6bd341186b2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className='rounded'>
                                        <img className='rounded' src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    </SwiperSlide>

                                    {/* pagination second show  */}
                                    <div className="autoplay-progress" slot="container-end">
                                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                                            <circle cx="24" cy="24" r="20"></circle>
                                        </svg>
                                        <span ref={progressContent}></span>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                        {/* second dev  */}
                        <div>
                            <h2 className='text-slate-950 text-5xl	font-bold'>Nike</h2>
                            <h4 className='text-slate-950 text-2xl mt-2'>Mens's Shoe</h4>
                            {/* rating  */}
                            <div className='flex mt-2 items-center'>
                                <FaStar className='text-orange-300 text-1xl me-2' />
                                <FaStar className='text-orange-300 text-1xl me-2' />
                                <FaStar className='text-orange-300 text-1xl me-2' />
                                <FaStar className='text-orange-300 text-1xl me-2' />
                                <FaStar className='text-orange-300 text-1xl me-2' />
                                <span>
                                    (150 review)
                                </span>
                            </div>
                            {/* amount  */}
                            <h2 className='text-slate-950 text-3xl	font-bold my-2'>$250</h2>
                            {/* description  */}
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sequi enim, inventore quasi atque quia voluptate labore explicabo doloribus voluptatum quos delectus cum quisquam aliquam dolor illo officia autem sed! Quisquam quos eum quas fuga nihil laborum asperiores quidem nemo, inventore, cum optio tempore vitae unde numquam deleniti sunt laudantium blanditiis impedit! Hic, voluptatum officia. Tenetur ipsa atque in voluptatem numquam saepe et distinctio repellat dolorem quisquam corrupti voluptas accusamus tempore enim, natus quam commodi assumenda. Sed distinctio ipsam enim non sint iusto, nobis iste sit rerum aliquam labore omnis deserunt eos? Vel ipsam a eligendi odio, similique quam distinctio?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
