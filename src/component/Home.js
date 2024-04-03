import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselPage from './Carousel';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div>
            <CarouselPage />
            {/* <Container>home</Container> */}
            <h1 className="pt-2 text-center">Services</h1>
            <Container className='py-3' >
                <Row sm={1} md={3} direction="horizontal" gap={3}>
                    <Col sm={1} md={3} className=' text-center border p-5 bg-secondary-subtle bg-body-tertiary rounded border border-primary'>
                        {/* <a
                            href="https://wa.me/918527908615"
                            className="whatsapp_float"
                            target="_blank"
                            rel="noopener noreferrer"
                        ></a> */}
                        <h1 className='bg-white'>Icon</h1>
                        <h3>Placement & Traning</h3>
                        <Link to="/services/placement-traning"><button className='btn btn-success'>see more...</button> </Link>
                    </Col>
                    <Col sm={1} md={3} className='text-center border p-5 bg-secondary-subtle bg-body-tertiary rounded border border-primary'>
                        <h1 className='bg-white'>Icon</h1>
                        <h3>IT Solution</h3>
                        <Link to="/services/it-solution"><button className='btn btn-success'>see more...</button> </Link>
                    </Col>
                    <Col sm={1} md={3} className='text-center border p-5 bg-secondary-subtle bg-body-tertiary rounded border border-primary'>
                        <h1 className='bg-white'>Icon</h1>
                        <h3>Financial Services</h3>
                        <Link to="/services/financial-service"><button className='btn btn-success'>see more...</button> </Link>
                    </Col>
                    <Col sm={1} md={3} className='text-center border p-5 bg-secondary-subtle bg-body-tertiary rounded border border-primary'>
                        <h1 className='bg-white'>Icon</h1>
                        <h3>Company Formation</h3>
                        <Link to="/services/company-formation"><button className='btn btn-success'>see more...</button> </Link>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Home