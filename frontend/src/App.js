import { Container } from 'react-bootstrap'
import  Header  from './component/Header'
import Footer from './component/Footer'
const App = () => {
  return (
    <>
    < Header />
    <main>
      <Container>
        <h1>Latest Products</h1>
      </Container>
    </main>
    <Footer/>
    </>
  );
}

export default App