import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

const ProductDetail = () => {
  let { id } = useParams()
  const[product,setProduct]=useState(null)
  const getProductDetail = async() => {
    let url=` https://my-json-server.typicode.com/hong-free/H-M_site/products/${id}`;
    let response=await fetch(url);
    let data=await response.json();
    setProduct(data);
  }
    useEffect(()=> {
  getProductDetail()
}, [])

return (
   <Container className='container'>
      <Row>
        <Col className='procut-img'><img src={product?.img}/></Col>
        <Col className='prodeuct-des'>
        <div className='product-title'>{product?.title}</div>
        <div className='product-price'>{product?.price} </div>
        <div>{product?.new==true?"신제품":""}</div>
        <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        SIZE
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ minWidth: 'auto', width: '75px' }}>
        <Dropdown.Item href="#/action-1"className="text-center py-2 px-0">S</Dropdown.Item>
        <Dropdown.Item href="#/action-2"className="text-center py-2 px-0">M</Dropdown.Item>
        <Dropdown.Item href="#/action-3"className="text-center py-2 px-0">L</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Col>
      </Row>
    </Container>
)
}

export default ProductDetail;
