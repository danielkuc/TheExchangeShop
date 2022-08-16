import { Container } from 'react-bootstrap';
import FeaturedProducts from './FeaturedProducts';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='w-100 vh-90'>
    <Container className='text-center'>
      <div className='py-5'>
        <p className='h1'>The Exchange</p>
        <hr />
      </div>
      <div className='pb-5'>
        <Link to="products" className='shop-now p-3'>Shop Now</Link>
      </div>
      <FeaturedProducts/>
    </Container>
    </div>
  )
}

export default Home