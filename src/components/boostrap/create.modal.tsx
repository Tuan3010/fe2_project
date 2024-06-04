import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {toast} from 'react-toastify';
import {mutate} from 'swr';



function ModalCreate({refreshData} :any) {
  
  const [show, setShow] = useState(false);
  const [file,setFile] = useState<File>();
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [img,setImg] = useState("");
  const [des,setDes] = useState("");


  const handleShow = () => setShow(true);
  const handleClose = () =>{
    setName("");
    setPrice("");
    setImg("");
    setDes("");
    setShow(false);
  } 

  

  const handleSubmit = () =>{
    console.log(img);
    
    if (name == '' || price =='' ||img =='' || des=='') {
      toast.error('Lưu thất bại');
    }else{

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name,price,img,des})
      };
      fetch('http://localhost:8000/products', requestOptions)
        .then(response => response.json())
        .then(data =>{
          console.log(data);
          toast.success('Lưu thành công');
          refreshData();
        });  
    }
    
  }
  const handleFileChange = (event) => {
    const img = event.target.files[0];
    setImg(img.name);
  };
  
  
  
  


  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add
      </Button>

      <Modal size={'lg'} show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Thêm Dữ Liệu</Modal.Title>
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

export default ModalCreate;