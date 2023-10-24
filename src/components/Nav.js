import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {

    const NavItems = ["Menu", "Store", "What’s New", "Story"]

    const ButtonItems = [
        { text: "임차문의", color: "bg-[#db0007]"},
        { text: "RECRUIT", color: "bg-[#db7e00]"},
        { text: "ENG", color: "bg-[#264a36]"}
    ]

    const NavSubItems = [
        ["버거", "맥런치", "맥모닝", "해피 스낵", "사이드 & 디저트", "맥카페 & 음료", "해피밀"],
        ["매장찾기","맥딜리버리","맥드라이브","임차문의"],
        ["프로모션","새로운 소식","이달의 해피밀"],
        ["브랜드 소개","사회적 책임과 지원","맥도날드 품질 이야기","맥도날드 사람들"]
    ]

    return (
        <>
            <div className="w-full relative overflow-hidden pt-36 px-0 border-b border-[#ffbc0d] bg-white">
                <div className="max-w-7xl mx-auto flex items-center justify-between absolute top-0 left-0 right-0 h-36 text-center ">
                    <div className='basis-[10%]'>
                        <NavLink to='/'>
                            <img src='./../Images/logo.png' alt='로고' title='메인으로 이동'/>
                        </NavLink>
                    </div>
                    <div className="basis-[70%] font-semibold text-xl">
                        <ul className='flex h-36 leading-[140px] text-[#292929]'>
                            {
                                NavItems.map((e, i) => {
                                    return(
                                        <li key={i} className="basis-1/4 w-[72px] text-center">{e}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="basis-[20%]">
                        <ul className="flex justify-between">
                            {
                                ButtonItems.map((e, i) => {
                                    return(
                                        <li key={i} className={`text-[13px] font-semibold w-20 h-9 cursor-pointer flex justify-center text-center rounded-[48px] items-center text-white ${e.color}`}>
                                            {e.text}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="pl-5 cursor-pointer z-10">
                        <img src="./../Images/ico_search.png" alt="검색" />
                    </div>
                </div>
                <div className="max-w-7xl mx-auto hidden">
                    <div className="flex h-[380px] bg-white border-b-[#ffbc0d] border-t-[#ddd] z-11">
                        <div className="basis-[70%] mx-auto flex justify-between">
                            {
                                NavSubItems.map((e, i) => {
                                    return(
                                        <ul key={i} className="text-base font-medium basis-[21%] pt-[22.7px] relative leading-[19.8px]">
                                            {
                                                e.map((el, index) => {
                                                    return(
                                                        <li key={index} className="py-3 text-[#808080]">{el}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav