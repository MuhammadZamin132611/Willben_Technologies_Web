import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselPage from './Carousel';
import { Link } from 'react-router-dom';
function Home() {

   

    return (
        <div className='background'>
            <CarouselPage />
            <h1 className="pt-2 text-center">Services</h1>
            <Container className='pt-3 pb-5'>
                <Row className='grid gap-3'>
                    <Col className='text-center border p-5 bg-white shadow bg-body-tertiary rounded border'>
                    <i className="fa-solid fa-users-rectangle home-service-icon mb-3"></i>
                        <h5 className='text-nowrap'>Placement & Traning</h5>
                        <Link to="/services/placement-traning"><button className='btn btn-success'>see more...</button> </Link>
                    </Col>
                    <Col className='text-center border p-5 bg-white shadow bg-body-tertiary rounded border'>
                    <i className="fa-solid fa-people-arrows home-service-icon mb-3"></i>
                        <h5 className='text-nowrap'>IT Solution</h5>
                        <Link to="/services/it-solution"><button className='btn btn-success'>see more...</button> </Link>
                    </Col>
                    <Col className='text-center border p-5 bg-white shadow bg-body-tertiary rounded border'>
                    <i className="fa-solid fa-chart-line home-service-icon mb-3"></i>
                        <h5 className='text-nowrap'>Financial Services</h5>
                        <Link to="/services/financial-service"><button className='btn btn-success'>see more...</button> </Link>
                    </Col>
                    <Col className='text-center border p-5 bg-white shadow bg-body-tertiary rounded border'>
                    <i className="fa-solid fa-handshake home-service-icon mb-3"></i>
                        <h5 className='text-nowrap'>Company Formation</h5>
                        <Link to="/services/company-formation"><button className='btn btn-success'>see more...</button> </Link>
                    </Col>
                </Row>
            </Container>
            

        </div>
    )
}

export default Home