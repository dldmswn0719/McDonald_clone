import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation , Pagination } from "swiper/modules";

function Banner() {

    const BannerImg = [
        {
            "img" : "./../Images/jindoswiper.jpg",
            "title" : "진도 대파크림 크로켓 버거"
        },
        {
            "img" : "./../Images/baconswiper.jpg",
            "title" : "빅맥 베이컨"
        },
        {
            "img" : "./../Images/chillerswiper.jpg",
            "title" : "제주 한라봉 칠러,자두 천도복숭아 칠러"
        },
        {
            "img" : "./../Images/happysnackswiper.jpg",
            "title" : "해피스낵"
        },
        {
            "img" : "./../Images/managerswiper.jpg",
            "title" : "채용공고"
        },
        {
            "img" : "./../Images/mccrispyswiper.jpg",
            "title" : "맥크리스피버거"
        },
        {
            "img" : "./../Images/mclunchswiper.jpg",
            "title" : "맥런치"
        },
        {
            "img" : "./../Images/mcmorningswiper.jpg",
            "title" : "맥모닝"
        },
        {
            "img" : "./../Images/morderswiper.jpg",
            "title" : "맥도날드 M오더"
        },
        {
            "img" : "./../Images/strawberryswiper.jpg",
            "title" : "베리 스트로베리 맥플러리,스트로베리콘"
        }
    ]

    return (
        <>
            <div className="w-full relative">
                <div className="w-[calc(100%-4px)] mx-[2px]">
                    <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    navigation={{clickable: true}}
                    pagination={{clickable: true}}
                    modules={[Autoplay, Navigation ,Pagination]}
                    
                    id='swiper'
                    >
                        {
                            BannerImg.map((e,i)=>{
                                return (
                                    <SwiperSlide key={i} className='relative'>
                                        <img src={e.img} alt={e.title} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Banner