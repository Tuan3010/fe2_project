'use client'
import React from 'react'
import Spline from '@splinetool/react-spline';


export default function page() {
    return (
        <div className='min-h-screen w-full'>
            <div className="snack-content1 w-full h-[500px] px-[200px] flex relative">
                <div className="w-2/3 h-full">
                    <h2 className='text-content'>SNACK</h2>
                    <a href="#"><span>Snack Lay's Khoai Tây</span></a>
                    <a href="#"><span>Snack phô mai</span></a>
                    <a href="#"><span>Snack Tomato Cà chua</span></a>
                </div>
                <div className="w-1/3 h-full">
                    <Spline scene="https://prod.spline.design/6rUlHFsc9WyE0fqM/scene.splinecode" />
                </div>
            </div>
            <div className="snack-content2 w-full h-[500px]  flex relative">
            </div>
        </div>
    )
}
