import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {

    const navItems = ["Menu", "Store", "What’s New", "Story"];

    const buttonItems = [
        { text: "임차문의", color: "#db0007" },
        { text: "RECRUIT", color: "#db7e00" },
        { text: "ENG", color: "#264a36" }
    ];

    const navSubItems = [
        ["버거", "맥런치", "맥모닝", "해피 스낵", "사이드 & 디저트", "맥카페 & 음료", "해피밀"],
        ["매장찾기","맥딜리버리","맥드라이브","임차문의"],
        ["프로모션","새로운 소식","이달의 해피밀"],
        ["브랜드 소개","사회적 책임과 지원","맥도날드 품질 이야기","맥도날드 사람들"]
    ];

    return (
        <>
            <div className="w-full relative">
                <div className="max-w-7xl h-[140px] mx-auto flex items-center justify-between">
                    <div className='basis-[10%]'>
                        <NavLink to='/'>
                            <img src='./../Images/logo.png' alt='로고' />
                        </NavLink>
                    </div>
                    <div className="max-w-7xl basis-[70%] font-[600] text-[20px]">
                        <ul className="w-full flex h-[140px] leading-[140px] text-[#292929]">
                            {
                                navItems.map((e, i) => (
                                    <li key={i} className="basis-1/4 w-[72px] text-center">{e}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="basis-[10%]">
                        <ul className="flex">
                        {
                            buttonItems.map((e, i) => (
                                <li key={i} style={{backgroundColor: e.color}} className={`text-[13px] font-[600] w-[80px] h-9 cursor-pointer text-center rounded-[48px] items-center leading-[38px]} text-white`}>
                                    {e.text}
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                    <div className="basis-[10%] cursor-pointer z-10">
                        <img src="./../Images/ico_search.png" alt="검색" />
                    </div>
                </div>
                <div className="absolute">
                    {/* <div className="w-full h-[380px] bg-white border-b-[#ffbc0d] border-t-[#ddd] z-11"></div> */}
                    {/* <div className="w-[850px] mx-auto flex h-0 overflow-hidden"> */}
                    <div className="w-[850px] mx-auto flex">
                        {navSubItems.map((items, index) => 
                            <ul key={index} className="text-[16px] font-medium basis-[21%] pt-[22.7px] relative leading-[19.8px]">
                                {items.map((item, i) => 
                                    <li key={i} className="py-[13px] text-[#808080]">{item}</li>
                                )}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav