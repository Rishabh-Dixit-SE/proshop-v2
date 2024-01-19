import { Container } from 'react-bootstrap'
import  Header  from './component/Header'

const App = () => {
  return (
    <>
    < Header />
    <main>
      <Container>
        <h1>Latest Products</h1>
      </Container>
    </main>
    </>
  );
}

export default App