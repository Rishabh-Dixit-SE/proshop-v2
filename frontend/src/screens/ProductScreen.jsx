import {useParams} from 'react-router-dom';
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {Row,Col,Image,ListGroup,Card,Button, ListGroupItem} from "react-bootstrap"
import React from 'react'
import Rating from '../component/Rating';
import axios from 'axios';

const ProductScreen = () => {
const [product,setProduct]=useState({});
    //url have id that will goe inside productId
const {id:productId} = useParams();
useEffect(()=>{
    const fetchProduct=async()=>{
        const {data}=await axios.get(`/api/products/${productId}`);
        setProduct(data);
    }
    fetchProduct();
},[productId]);


{/*
here we are  using useEffect that why we don't need to use array
const product=products.find((x)=>x._id===productId) */}
    return (
   <>
   <Link to='/' className='btn btn-light my-3'>Go Back</Link>
  <Row >
     <Col md={6}>
        <Image src={product.image} alt={product.name} fluid/>
     </Col>
     <Col md={3}>
        <ListGroup variant='flush'>
            <ListGroup.Item>
                <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
            </ListGroup.Item>
           
        </ListGroup>
     </Col>

<Col md={3}>
<ListGroup variant='flush'>
             <ListGroup.Item>  
              <h5>  Price: ${product.price}</h5>
            </ListGroup.Item>
               
            <ListGroup.Item>  
            <h5> Status:{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</h5>
            </ListGroup.Item>   

            <ListGroup.Item>
            <h5> Description: {product.description}</h5>
            </ListGroup.Item>

<ListGroup.Item>

<Button className='btn-block' type='button' disabled={product.countInStock === 0}>Add To Cart</Button>
</ListGroup.Item>
</ListGroup>  
</Col>



  </Row>
   
   </>
  )
}

export default ProductScreen