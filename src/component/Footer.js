import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import icon from '../assets/willben_logo.jpg'
import { Link } from 'react-router-dom';
import Card from '../assets/cards.png'

function Footer() {
    return (
        <div>
            <div style={{ backgroundColor: '#104978' }} className="shadow py-5">
                {/* <h1 className='text-center pb-5'>Footer</h1> */}
                <Container>

                    <Row className="">
                        <Col sm={3}>
                            <div className='d-flex justify-content-center'>
                                <Image src={icon} roundedCircle style={{ height: '95px', width: '100px' }} />
                            </div>
                            <h4 className='text-center pt-3 text-white'>Willben Technologies</h4>
                            <div className='d-flex justify-content-center py-4 gap-3'>
                                <div><Link to="/" className='text-white link-underline link-underline-opacity-0 fs-5'><i class="fa-brands fa-twitter bg-primary p-3 rounded-pill"></i></Link></div>
                                {/* <div><Link to="/" className='text-white link-underline link-underline-opacity-0 fs-5'><i class="fa-brands fa-facebook-f bg-primary px-4 py-3 rounded-pill"></i></Link></div> */}
                                <div><Link to="/" className='text-white link-underline link-underline-opacity-0 fs-5'><i class="fa-brands fa-linkedin-in bg-primary p-3 rounded-pill"></i></Link></div>
                            </div>
                        </Col>
                        <Col sm={3} className='text-white py-4'>
                            <h3 className='text-primary pb-5'>Quick Link</h3>
                            <div><Link to="/" className='text-white link-underline link-underline-opacity-0 fs-5'><i class="fa-solid fa-right-long mr-2"></i> Home</Link></div>
                            <div><Link to="/about" className='text-white link-underline link-underline-opacity-0 fs-5'><i className="fa-solid fa-right-long mr-2"></i> About</Link></div>
                            <div><Link to="/contact" className='text-white link-underline link-underline-opacity-0 fs-5'><i className="fa-solid fa-right-long mr-2"></i> Contact</Link></div>
                        </Col>
                        <Col sm={3} className='text-white py-4'>
                            <h3 className='text-primary pb-5'>Company</h3>
                            <div><Link className='text-white link-underline link-underline-opacity-0 fs-5'><i className="fa-solid fa-right-long mr-2"></i> Term & Conditions</Link></div>
                            <div><Link className='text-white link-underline link-underline-opacity-0 fs-5'><i className="fa-solid fa-right-long mr-2"></i> Privacy Policy</Link></div>
                            <div><Link className='text-white link-underline link-underline-opacity-0 fs-5'><i className="fa-solid fa-right-long mr-2"></i> Disclaimer</Link></div>
                        </Col>
                        <Col sm={3} className='text-white py-4'>
                            <h3 className='text-primary pb-5'>Services</h3>
                            <div><Link className='text-white link-underline link-underline-opacity-0 fs-5'><i className="fa-solid fa-right-long mr-2"></i> Borrower</Link></div>
                            <div><Link className='text-white link-underline link-underline-opacity-0 fs-5'><i className="fa-solid fa-right-long mr-2"></i> Lender</Link></div>
                            <div><Link className='text-white link-underline link-underline-opacity-0 fs-5'><i className="fa-solid fa-right-long mr-2"></i> Feedback</Link></div>
                            <div><Link className='text-white link-underline link-underline-opacity-0 fs-5'><i className="fa-solid fa-right-long mr-2"></i> Site Map</Link></div>
                        </Col>
                    </Row>
                </Container>

            </div>
            <div className='py-2' style={{backgroundColor:'#0B3151'}}>
                <Container>
                    <Row>
                        <Col>
                        <img style={{height:'30px'}} src={Card} alt="" />
                        </Col>
                        <Col>
                            <p className='text-white fs-6'>©  Copyright 2020 | Willben Technologies Pvt Ltd</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Footer