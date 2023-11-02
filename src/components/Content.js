import React, { useState } from 'react'

function Content() {

    const ContentItem = [
        {
            "img" : "./../Images/jindocontent.jpg",
            "desc" : "컴백! 진도 대파 크림 크로켓 버거"
        },
        {
            "img" : "./../Images/baconcontent.jpg",
            "desc" : "완벽한 빅맥에 베이컨까지!"
        },
        {
            "img" : "./../Images/happysnackcontent.jpg",
            "desc" : "갓성비 간식 맛집,맥도날드 해피 스낵!"
        },
        {
            "img" : "./../Images/mordercontent.jpg",
            "desc" : "맥도날드 M오더"
        },
        {
            "img" : "./../Images/mccrispycontent.jpg",
            "desc" : "빠삭하게 빠져드는 맛,",
            "desc2" : "맥크리스피!"
        },
        {
            "img" : "./../Images/eggcontent.jpg",
            "desc" : "갓 구워내 따뜻하고 신선한",
            "desc2" : "베이컨 토마토 에그 머핀!"
        },
        {
            "img" : "./../Images/chillercontent.jpg",
            "desc" : "상콤달콤!",
            "desc2" : "NEW 자두 천도복숭아 칠러 출시!"
        },
        {
            "img" : "./../Images/managercontent.jpg",
            "desc" : "맥도날드와 함께 성장할",
            "desc2" : "크루와 매니저를 찾습니다"
        },
        {
            "img" : "./../Images/rewardcontent.jpg",
            "desc" : "첫 적립시 2000 포인트 제공!",
            "desc2" : "새로워진 마이 맥도날드 리워드!"
        },
        {
            "img" : "./../Images/storycontent.png",
            "desc" : "우리가 엄격해질수록",
            "desc2" : "버거는 더 맛있어지니까!"
        },
        {
            "img" : "./../Images/coffeecontent.jpg",
            "desc" : "0.1초에 1잔!",
            "desc2" : "매일 마시는 커피를 더 맛있게"
        },
        {
            "img" : "./../Images/soccercontent.jpg",
            "desc" : "전문 코치들의 체계적이고 전문적인",
            "desc2" : "교육을 통해 지역사회 행복에 기여합니다"
        },
        {
            "img" : "./../Images/hirecontent.png",
            "desc" : "귀하의 토지,건물에 맥도날드를 유치",
            "desc2" : "하세요!"
        }
    ]

    const [visible,setVisible] = useState(6);
    const MoreItems = () =>{
        setVisible(preVisible => preVisible + 6);
    }

    return (
        <>
            <div className="w-full relative bg-[#fbfbfb] pb-16">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between px-5">
                    <h2 className='pt-8 mb-16 text-4xl font-semibold text-[#292929]'>McDonald's LIVE</h2>
                        <div className=" flex flex-wrap justify-between">
                            {
                                ContentItem.slice(0,visible).map((e,i)=>{
                                    return(
                                        <div className="basis-full md:basis-[49%] lg:basis-[32.5%] mb-4">
                                            <div key={i} className='shadow-[0_3px_4px_rgba(0,0,0,0.1)] rounded-xl h-[440px]'>
                                                <img className='w-full rounded-[12px_12px_0_0]' src={e.img} alt={e.desc} />
                                                <div className="p-4">
                                                    <p>{e.desc}</p>
                                                    <p>{e.desc2}</p>
                                                </div>
                                            </div>
                                        </div>  
                                    )
                                })
                            }
                        </div>
                        {
                            visible < ContentItem.length &&
                            <div className="mt-20 flex mx-auto justify-center">
                                <button onClick={MoreItems}>
                                    <img src="./../Images/btn_more.png" alt="btn_more" />   
                                </button>
                            </div>
                        }
                </div>
            </div>
        </>
    )
}

export default Content