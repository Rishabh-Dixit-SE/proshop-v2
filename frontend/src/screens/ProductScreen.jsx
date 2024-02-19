import { useState } from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Form,Row,Col,Image,ListGroup,Card,Button, ListGroupItem} from "react-bootstrap"
import React from 'react'
import Rating from '../component/Rating';
import { useGetProductDetailsQuery } from '../slices/productsApiSlices';
import Loader from '../component/Loader';
import Message from '../component/Message';
import {addToCart} from '../slices/cartSlice';
import { useDispatch } from 'react-redux';

const ProductScreen = () => {

    //url have id that will goe inside productId
const {id:productId} = useParams();

const dispatch=useDispatch();
const navigate=useNavigate();



//for redux cart
const [qty,setQty]=useState(1);

const {data:product,isLoading,error}=useGetProductDetailsQuery(productId);

const addToCartHandler=()=>{
    dispatch(addToCart({...product,qty}))
    navigate('/cart');
    }

{/*
here we are  using useEffect that why we don't need to use array
const product=products.find((x)=>x._id===productId) */}
    return (
   <>
   <Link to='/' className='btn btn-light my-3'>Go Back</Link>
   { isLoading ? (<h2><Loader/></h2>):error?(<Message variant='danger'>{error?.data?.message}</Message>):(
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
{/*for redux*/}

{ product.countInStock>0 && (
    <ListGroup.Item>
        <Row>
            <Col><h5>Qty</h5></Col>
            <Col>
            <Form.Control as='select' value={qty} onChange={(e)=>setQty(Number(e.target.value))}>
            { [...Array(product.countInStock).keys()].map((x)=>
                (<option key={x+1} value={x+1}>
                     {x+1}
                </option>)
            )}
            </Form.Control>
            </Col>
        </Row>
    </ListGroup.Item>
) }

<ListGroup.Item>

<Button className='btn-block' type='button' disabled={product.countInStock === 0} onClick={addToCartHandler}>Add To Cart</Button>
</ListGroup.Item>
</ListGroup>  
</Col>



</Row>


   )}
   </>
  )
}

export default ProductScreen