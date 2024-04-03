import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import icon from '../assets/willben_logo.jpg'
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className="bg-dark shadow-lg bg-opacity-10 py-5">
            {/* <h1 className='text-center pb-5'>Footer</h1> */}
            <Container>

                <Row className="">
                    <Col sm={2} >
                        <div className='d-flex justify-content-center'>
                            <Image src={icon} roundedCircle style={{ height: '95px', width: '100px' }} />
                        </div>
                        <div className='d-flex justify-content-center py-4 gap-3'>
                        <div><Link to="/" className='text-white link-underline link-underline-opacity-0 fs-5'><i class="fa-brands fa-twitter bg-success bg-opacity-50 p-3 rounded-pill"></i></Link></div>
                        {/* <div><Link to="/" className='text-white link-underline link-underline-opacity-0 fs-5'><i class="fa-brands fa-facebook-f bg-success px-4 py-3 rounded-pill"></i></Link></div> */}
                        <div><Link to="/" className='text-white link-underline link-underline-opacity-0 fs-5'><i class="fa-brands fa-linkedin-in bg-success bg-opacity-50 p-3 rounded-pill"></i></Link></div>
                    </div>
                    </Col>
                    <Col sm={5} className='grid text-center py-4'>
                        <div><Link to="/" className='text-dark link-underline link-underline-opacity-0 fs-5'><i className="fa-solid fa-arrow-right mx-1"></i> Home</Link></div>
                        <div><Link to="/about" className='text-dark link-underline link-underline-opacity-0 fs-5'><i className="fa-solid fa-arrow-right mx-1"></i> About</Link></div>
                        <div><Link to="/contact" className='text-dark link-underline link-underline-opacity-0 fs-5'><i className="fa-solid fa-arrow-right mx-1"></i> Contact</Link></div>
                    </Col>
                    <Col sm={5} className='grid justify-content-center'>
                        <h1 className='text-center pb-2'>Contact Form</h1>
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