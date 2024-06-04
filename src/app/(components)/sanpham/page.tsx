'use client'
import { useEffect, useState } from 'react';
import './sanpham.css'

export default function Products(){
  const [data,setData] = useState([]);
  const DataAPI=()=>{
    fetch('http://localhost:8000/products')
      .then((res)=> res.json())
      .then((result) =>{
        result.sort((a: any, b: any) => b.id - a.id);
        setData(result);
        console.log(result);
        
      })
  }
  useEffect(()=>{
    DataAPI();
  },[]);


  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="row">
        {data?.map((item)=>{
          return(
            <div className="col l-4 mb-8">
          <div className="wrap-product border-[#7a5a36] border-solid border-[4px]">
            <div className="product-img">
              <a href=""><img src={`./imgProduct/${item.img}`} alt="" /></a>
            </div>
            <div className="product-info bg-[#eaddb2] relative p-[15px] ">
              <div className="price-product rounded-full w-[90px] h-[90px] absolute top-[-50px] right-[15px] border-solid border-[#dcac0d] border-4 text-center py-[8px] font-bold bg-[#b34b29]">
                Giá
                <span className="block">{item.price}</span>
                VND
              </div>
              <div className="name-product text-[20px] leading-5 w-[200px] text-[#38260e] font-bold mb-7">{item.name}</div>
              <div>*****</div>
              <span className="des-product mb-14 block">{item.des}</span>
              <form action="" method="post">
                <input className='block float-right w-[70px] bg-[#e6ddb2] text-center border-solid border-2 border-[#7a5a36]' type="number" id="quantity" name="quantity" value={1}/>
                <input className=' p-2 mt-[53px] border-[#38260e] border-dashed border-4' type="submit" value={'Đặt món ngay'} />
              </form>
            </div>
          </div>
        </div>
          )
        })
          
        }
        
        
        
      </div>
    </div>
  )
}