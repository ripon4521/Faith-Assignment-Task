

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import useFeedback from "../../../Hooks/useFeedback";


const Testimonils = () => {
 
    return (
        <section className="my-20 max-w-6xl bg-slate-200 rounded-lg p-10 mx-auto">
           

         <div>
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper p-20 ">
        

   <SwiperSlide className='p-10 font-dmsnas'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore distinctio maxime fuga nulla vitae. Ducimus, esse. Ut sequi, quod consequatur ab nesciunt nulla cum expedita dolore quis quia doloribus laboriosam.
    Vel culpa recusandae officiis ut ipsum animi blanditiis nam eveniet, aperiam libero, dolorum quas debitis tenetur doloribus ullam repudiandae architecto fuga eius. Distinctio architecto voluptate inventore soluta aperiam, eaque recusandae.
    <div className='flex  justify-center items-center '>
        <img className='w-16' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
<div>
<p className='text-xl  font-dmsnas font-semibold text-center mt-3'>James Bond</p>
    <p className='text-center font-dmsnas '>Student of b tech</p>
</div>
    </div>
   
   </SwiperSlide>

   <SwiperSlide className='p-10 font-dmsnas'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore distinctio maxime fuga nulla vitae. Ducimus, esse. Ut sequi, quod consequatur ab nesciunt nulla cum expedita dolore quis quia doloribus laboriosam.
    Vel culpa recusandae officiis ut ipsum animi blanditiis nam eveniet, aperiam libero, dolorum quas debitis tenetur doloribus ullam repudiandae architecto fuga eius. Distinctio architecto voluptate inventore soluta aperiam, eaque recusandae.
    <div className='flex  justify-center items-center '>
        <img className='w-16' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
<div>
<p className='text-xl  font-dmsnas font-semibold text-center mt-3'>James Bond</p>
    <p className='text-center font-dmsnas '>Student of b tech</p>
</div>
    </div>
   </SwiperSlide >

   <SwiperSlide className='p-10 font-dmsnas '> 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore distinctio maxime fuga nulla vitae. Ducimus, esse. Ut sequi, quod consequatur ab nesciunt nulla cum expedita dolore quis quia doloribus laboriosam.
    Vel culpa recusandae officiis ut ipsum animi blanditiis nam eveniet, aperiam libero, dolorum quas debitis tenetur doloribus ullam repudiandae architecto fuga eius. Distinctio architecto voluptate inventore soluta aperiam, eaque recusandae.
    <div className='flex  justify-center items-center '>
        <img className='w-16' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
<div>
<p className='text-xl  font-dmsnas font-semibold text-center mt-3'>James Bond</p>
    <p className='text-center font-dmsnas '>Student of b tech</p>
</div>
    </div>
   </SwiperSlide>
            


                
       
      </Swiper>
         </div>
          
        </section>
    );
};

export default Testimonils;