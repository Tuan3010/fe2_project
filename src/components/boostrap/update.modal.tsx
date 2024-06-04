import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {toast} from 'react-toastify';

function ModalUpdate({data,refreshData}) {
  
  
  const [id,setId] = useState("");
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [img,setImg] = useState(null);
  const [des,setDes] = useState("");
  const [show, setShow] = useState(false);
  
  const handleShow = () => {setShow(true);}
  const handleClose = () =>{setShow(false);};
  useEffect(()=>{
  
      setId(data.id);
      setName(data.name);
      setPrice(data.price);
      setImg(data.img);
      setDes(data.des);
      
    // }
  },[data])
  
  
  
  
  const handleSubmit = () =>{
   if (!name || !price  || !des) {
    toast.error('Cập nhật thất bại');
    
   } else {
    
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name,price,img,des})
    };

    fetch(`http://localhost:8000/products/${id}`,requestOptions)
        .then(res =>res.json())
        .then(res=>{
          toast.success('Cập nhật thành công');
          handleClose();
          refreshData();
        })
   }
    
  }
  const handleFileChange = (event) => {
    const img = event.target.files[0];
    setImg(img.name);
  };
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal size={'lg'} show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Sửa sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3" >
            <Form.Label>Tên sản phẩm</Form.Label>
            <Form.Control
             type="text" placeholder="..."
             value={name}
             onChange={(e)=> setName(e.target.value)}
             />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Giá sản phẩm</Form.Label>
            <Form.Control
             type="text" placeholder="..."
             value={price}
             onChange={(e)=> setPrice(e.target.value)}
              />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Ảnh sản phẩm</Form.Label>
            <Form.Control 
            type="file" placeholder="..."
            
            onChange={handleFileChange}
            
            />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Mô tả sản phẩm</Form.Label>
            <Form.Control as="textarea"
             rows={3} placeholder="..."
             value={des}
             onChange={(e)=> setDes(e.target.value)}
             />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUpdate;