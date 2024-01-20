import { Row,Col } from "react-bootstrap"
import products from "../Products"
import Product from "../component/Product"

const HomeScreen = () => {
  return (
    <>
    <h1>Lasteset Products Home Screens</h1>
    <Row>
        {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <h3><Product product={product}/></h3>
            </Col>
        ))}
    </Row>
    </>
  )
}

export default HomeScreen