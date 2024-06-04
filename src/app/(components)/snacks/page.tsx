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
        <div className='min-h-screen w-full'>
            <h1 className='px-[200px] relative text-content-title text-[50px] text-[#41512b] italic bold'>SNACK</h1>
            <div className="snack-content1 w-full h-[500px] px-[200px] flex relative ">
                <div className="w-2/3 h-full div-text-content1 content-center relative">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className='Snack text-[30px]'><div className="text-content-span div1">Snack Lay's</div>.</AccordionTrigger>
                            <AccordionContent className='Snack text-[14px]'>
                                <a href="#">Snack Lay's Khoai Tây</a>
                            </AccordionContent>
                            <AccordionContent className='Snack text-[14px]'>
                                <a href="#">Snack Lay's Phô Mai</a>
                            </AccordionContent>
                            <AccordionContent className='Snack text-[14px]'>
                                <a href="#">Snack Lay's Ớt Kayyy</a>
                            </AccordionContent>

                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className='Snack text-[30px]'><div className="text-content-span div2">Snack Poca</div>.</AccordionTrigger>
                            <AccordionContent className='Snack text-[14px]'>
                                <a href="#">Snack Lay's Khoai Tây</a>
                            </AccordionContent>

                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className='Snack text-[30px]'><div className="text-content-span div3">Snack O'start</div>.</AccordionTrigger>
                            <AccordionContent className='Snack text-[14px]'>
                                <a href="#">Snack Lay's Khoai Tây</a>
                            </AccordionContent>

                        </AccordionItem>

                    </Accordion>

                </div>
                <div className="w-1/3 h-full ">
                    <Spline className='w-[200px] h-[200px]' scene="https://prod.spline.design/6rUlHFsc9WyE0fqM/scene.splinecode" />
                </div>
            </div>
            <h1 className='px-[200px] relative text-content-title text-[50px] text-[#41512b] italic bold'>Bắp Ran </h1>

            <div className="snack-content1 w-full gap-4 h-[500px] px-[200px] flex relative ">
                <div className="w-1/3 h-full ">
                    <Spline scene="https://prod.spline.design/Yg5cNGhWjjlNScrX/scene.splinecode" />
                </div>
                <div className="w-2/3 h-full div-text-content1 content-center relative">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className='Snack text-[30px]'><div className="text-content-span div1">Bắp</div>.</AccordionTrigger>
                            <AccordionContent className='Snack text-[14px]'>
                                <a href="#">Bắp Ran Bơ</a>
                            </AccordionContent>
                            <AccordionContent className='Snack text-[14px]'>
                                <a href="#">Bắp Ran Phô Mai</a>
                            </AccordionContent>
                            <AccordionContent className='Snack text-[14px]'>
                                <a href="#">Bắp Ran Chocolate</a>
                            </AccordionContent>

                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
