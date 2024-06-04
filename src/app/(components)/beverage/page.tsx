'use client'
import React from 'react'
import Spline from '@splinetool/react-spline';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
export default function page() {
    return (
        <div className='min-h-screen w-full '>
            <h1 className='px-[200px] relative monster text-content-title text-[50px] text-[#41512b] italic bold'>Nước Có Ga</h1>

            <div className="w-full h-[500px]  relative snack-content1">

                <Spline className='absolute top-0 block' scene="https://prod.spline.design/iuTdn83zKwfx5t6V/scene.splinecode" />
                <div className="div-content-banner absolute w-[300px] h-[300px] left-[200px] top-[100px] ">
                    <div className="cha relative w-full h-full">
                        <div className="xoay absolute inset-0">
                            <div className="front  absolute inset-0 z-[1]">
                                <h1 className='h1-face text-[50px]'>Monster</h1>
                            </div>
                            <div className="left bg-[#124b2e] absolute w-[10px] h-full z-[1]"></div>
                            <div className="after bg-[#41bc00e0] absolute inset-0 z-[1]"></div>

                        </div>
                    </div>

                </div>
                <div className="div-content-banner div-content-banner-2 absolute w-[300px] h-[300px] right-[200px] top-[100px] z-[1]">
                    <div className="cha relative w-full h-full">
                        <div className="xoay xoay2 absolute inset-0">
                            <div className="front  absolute inset-0 z-[1]">
                                <h1 className='h1-face text-[50px]'>Monster</h1>
                            </div>
                            <div className="right bg-[#1fea3e] absolute w-[10px] h-full z-[1]"></div>
                            <div className="after bg-[#41bc00e0] absolute inset-0 z-[1]"></div>

                        </div>
                    </div>
                </div>
            </div>
            <h1 className='px-[200px] relative juice  text-content-title text-[50px] text-[#41512b] italic bold'>Nước Ép</h1>

            <div className="w-full h-[700px] relative line-juice-content1  pl-[200px] flex">
                <div className="w-1/3 h-full div-text-content1 content-center relative">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className='Snack text-[30px]'><div className="text-content-span div1">Xem Thêm</div>.</AccordionTrigger>
                            <AccordionContent className='Snack text-[14px]'>
                                <a href="#">Orange Juice</a>
                            </AccordionContent>
                            <AccordionContent className='Snack text-[14px]'>
                                <a href="#">Blue Berry juice</a>
                            </AccordionContent>
                            

                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="w-2/3 h-full mt-[10px]">
                    <Spline scene="https://prod.spline.design/NUURJXGQom8cYJtx/scene.splinecode" />
                </div>

            </div>
        </div>
    )
}
