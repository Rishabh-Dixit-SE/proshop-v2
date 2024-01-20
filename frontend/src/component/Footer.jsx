import { Container,Row,Col } from "react-bootstrap"

const Footer = () => {
    let current =new Date().getFullYear();
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    Copyright &copy; ProShop  
                     {current}
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer