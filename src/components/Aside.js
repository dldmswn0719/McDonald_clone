import React from 'react'

function Aside() {

    const MoveToTop = () =>{
        window.scrollTo({
          top:0,behavior:'smooth'
        })
    } 

    return (
        <>
            <div className="fixed bottom-20 z-[1] right-52 flex items-center flex-col">
                <img className='mb-5 cursor-pointer' src="./../Images/btn_story_04.png" alt="품질이야기" />
                <img className='cursor-pointer' src="./../Images/btn_delivery_04.png" alt="McDelivery" />
            </div>
            <div onClick={MoveToTop} className="fixed bottom-10 right-60 cursor-pointer">
                <img src="./../Images/btn_top_04.png" alt="top" />
            </div>
        </>
    )
}

export default Aside