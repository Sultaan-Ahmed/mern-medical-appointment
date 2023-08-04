
import {Pagination} from 'swiper/modules'
import {Swiper,SwiperSlide} from 'swiper/react'
import patientAvatar from '../../assets/images/patient-avatar.png'
import {HiStar} from 'react-icons/hi'
import 'swiper/css'
import 'swiper/css/pagination'
const Testimonials = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
        <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}} breakpoints={{
            640:{
                slidesPerView:1,
                spaceBetween:0
            },
            768:{
                slidesPerView:2,
                spaceBetween:20
            },
            1024:{
                slidesPerView:3,
                spaceBetween:30
            }
        }}>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Abdur Rahman</h4>
                            <div className='flex items-center gap-[7px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p>I have taken medical service from them. They treat so well and they are providing the best medical service.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Abdur Rahman</h4>
                            <div className='flex items-center gap-[7px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p>I have taken medical service from them. They treat so well and they are providing the best medical service.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Abdur Rahman</h4>
                            <div className='flex items-center gap-[7px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p>I have taken medical service from them. They treat so well and they are providing the best medical service.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Abdur Rahman</h4>
                            <div className='flex items-center gap-[7px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p>I have taken medical service from them. They treat so well and they are providing the best medical service.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Abdur Rahman</h4>
                            <div className='flex items-center gap-[7px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p>I have taken medical service from them. They treat so well and they are providing the best medical service.</p>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Testimonials