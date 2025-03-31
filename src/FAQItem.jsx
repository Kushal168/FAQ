import React from 'react'

export default function FAQItem(faq,index) {
    // console.log("faqqq", faq.faq.question)
  return (
        <>
            <div className="faq-box">
                <div className="que">
                    <div className='ques-div' key ={index}>{faq.faq.question}</div>
                    <button className='button-gt'>&gt;</button>
                </div>
            </div>
        </>
  )
}
