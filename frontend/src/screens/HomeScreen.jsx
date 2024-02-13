  
import { Row,Col } from "react-bootstrap"
import Product from "../component/Product"
import { useGetProductsQuery } from "../slices/productsApiSlices";
import Loader from "../component/Loader";
import Message from "../component/Message";
const HomeScreen = () => {

  const {data:products,isLoading,error}=useGetProductsQuery();
 
  return (
    <>
    
    {isLoading? (<h2> <Loader/> </h2>) : error ?(<Message variant='danger'>{error?.data?.message}</Message>):(<>
    
      <h1>Latest Products Home Screens</h1>
    <Row>
        {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <h3><Product product={product}/></h3>
            </Col>
        ))}
    </Row>
    </>)}
    </>
  )
}

export default HomeScreen