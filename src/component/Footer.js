import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import icon from '../assets/willben_logo.jpg'

function Footer() {
    return (
        <div className="bg-danger">
            <h1>Footer</h1>
            <Container>
                
                <Row className="">
                    <Col sm={2} className='d-flex justify-content-center'>
                        <Image src={icon} roundedCircle style={{height:'95px', width:'100px'}} />
                    </Col>
                    <Col sm={5} className='d-flex justify-content-center'>
                        
                        Variable width content</Col>
                    <Col  sm={5} className='grid justify-content-center'>
                        <input type="text" className='form-control' placeholder='Name' /><br />
                        <input type="text" className='form-control' placeholder='Email' /><br />
                        <input type="text" className='form-control' placeholder='Messgae' /><br />
                        <button className='btn btn-primary'>Submit</button>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Footer