import React from 'react'

function Footer() {

    const FooterList = ["개인정보 처리방침" ,"위치정보 이용약관" , "사이트맵" , "임차문의" ,"고객문의" ,"인재채용"]
    
    const FooterList2 = ['한국맥도날드(유)','대표이사: 김기원','사업자등록번호: 101-81-26409','전화주문: 1600-5252',"COPYRIGHT © 2019 ALL RIGHTS RESERVED BY McDonald's."]

    const SocialItems = [
        { class: 'facebook', text: '페이스북' },
        { class: 'instagram', text: '인스타그램' },
        { class: 'youtube', text: '유튜브' },
        { class: 'kakaostory', text: '카카오스토리' },
        { class: '', ImgSrc:"./../Images/web_accessibility.png", altText:"web_accessibility"}
    ];

    return (
        <>
            <div className="w-full bg-[#292929]">
                <div className="max-w-7xl mx-auto pt-11 pb-14">
                    <div className="flex justify-between">
                        <div className='flex text-sm'>
                            <ul className='text-white font-medium w-48'>
                                {
                                    FooterList.map((e,i)=>{
                                        return(
                                            <li key={i} className={i === 0 ? "" : "mt-1"}>
                                                <p className={i === 0 ? "text-[#ffff00]" : ""}>{e}</p>
                                            </li>
                                            // 첫번째 문장만 속성을 mt-1 없고 , 텍스트 색깔을 변경하기 위해서 인덱스 번호 0번으로 설정
                                        )
                                    })
                                }
                            </ul>
                            <ul className='text-[#808080] font-normal'>
                               {
                                    FooterList2.map((e,i)=>{
                                        return(
                                            <li key={i} className='mt-1'>
                                                <p>{e}</p>
                                            </li>
                                        )
                                    })
                               }
                            </ul>
                        </div>
                        <div>
                            <ul className="flex">
                                {
                                    SocialItems.map((e,i)=>{
                                        return(
                                            <li key={i} className={`${e.class} ml-5 ${i === 4 ? "-mt-[5px]" : ""}`}>
                                                {
                                                    e.text ? 
                                                    <p className='text-[0]'>{e.text}</p>
                                                    :
                                                    <img src={e.ImgSrc} alt={e.altText} className="w-24 h-16"/>
                                                }
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer