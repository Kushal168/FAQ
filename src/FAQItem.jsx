import React, { useState,useEffect } from 'react'

export default function FAQItem({faq,index}) {
    // console.log("faqqq", faq.faq.question)
    const [isShow, setIsShow] = useState(false)
    useEffect(() => {
        if (index == 0) {
            setIsShow(true);
        }
    }, [])
    function handleClick(){
        setIsShow((isShow)=>!isShow)
    }
  return (
        <>
            <div className="faq-box">
                <div className="que">
                    <div className='ques-div' key ={index}>{faq.question}</div>
                    <button className='button-gt' onClick={handleClick}>&gt;</button>
                    
                </div>
                {isShow && <div className='ans-div'>{faq.answer}</div>}
            </div>
        </>
  )
}
