'use client'
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Link from '../../../../../node_modules/next/link';
import ModalCreate from '@/components/boostrap/create.modal';
import ModalUpdate from '@/components/boostrap/update.modal';
import useSWR from "swr";
import {toast} from 'react-toastify';

function ListProduct() {
  
  
  const [data,setData] = useState([]);
  useEffect(()=>{
    DataAPI();
  },[]);
  
  // // Xư lí xóa dữ liệu
  const handleDelete = (id :any) =>{
    
    var result = confirm('Bạn có muốn xóa không');
    if (result) {
      const requestOption = {
        method: 'DELETE',
      }
      fetch(`http://localhost:8000/products/${id}`,requestOption)
          .then(DataAPI)     
    } 
    
  }
  // Gọi lại API
  const DataAPI=()=>{
    fetch('http://localhost:8000/products')
      .then((res)=> res.json())
      .then((result) =>{
        result.sort((a: any, b: any) => b.id - a.id);
        setData(result);
        console.log(result);
        
      })
  }
  
  
  return (
    <div className="max-w-[1200px] mx-auto">

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Tên sản phẩm</th>
          <th>Giá </th>
          <th>Ảnh </th>
          <th>Mô tả </th>
          <th>
            Action 
            <ModalCreate refreshData = {DataAPI} ></ModalCreate>
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map((element)=>{
          return(
            <tr>
              <td>{element['id']}</td>
              <td>{element['name']}</td>
              <td>{element['price']}</td>
              <td> <img style={{width: 100}} src={`/imgProduct/${element['img']}`} alt="" /></td>
              <td>{element['des']}</td>
              <td>             
                <ModalUpdate data = {element} refreshData = {DataAPI}></ModalUpdate>
                <Button onClick={()=>{handleDelete(element.id)}} variant={'danger'} >Delete</Button>
              </td>
            </tr>
          )
        })}
        
        
      </tbody>
    </Table>
    </div>
  );
}

export default ListProduct;