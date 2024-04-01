import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <div>
            <h1 className="py-2 text-center">Services</h1>
            <Container>
                <Row className=''>
                    <Col className='text-center border p-5 bg-primary'>
                        <h1 className='bg-white'>Icon</h1>
                        <h3>Traning</h3>
                        <i class="fa-brands fa-linkedin-in bg-success bg-opacity-50 p-3 rounded-pill"></i>
                    </Col>
                    <Col>1 of 1</Col>
                    <Col>1 of 1</Col>
                    <Col>1 of 1</Col>
                </Row>
            </Container>

        </div>
    )
}

export default Home