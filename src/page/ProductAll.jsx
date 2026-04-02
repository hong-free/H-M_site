import React, { useEffect ,useState} from 'react'
import ProductCard from '../component/ProductCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductAll = () => {
  const [productList, setProductList]=useState([]);
  const getProducts=async()=>{
    let url=` https://my-json-server.typicode.com/hong-free/
H-M_site/products`;
    let response=await fetch(url);
    let data=await response.json();
    setProductList(data);
  }
  useEffect(()=>{
    getProducts();
  },[])
  return (
    <div>
      <Container>
        <Row>
        {productList.map((menu)=>(
          <Col lg={3}> 
          <ProductCard item={menu}/>
          </Col> )
      )}
      </Row>
        </Container>
     
    </div>
  )
}

export default ProductAll;
