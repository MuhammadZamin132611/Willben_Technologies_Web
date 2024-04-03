import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import Container from 'react-bootstrap/Container';
import Financial from '../assets/financial-service.jpeg'
import ITInfomation from '../assets/company-formation.jpeg'
import jobs from '../assets/jobs.jpeg'
import Traning from '../assets/traning.avif'

function CarouselPage() {
    return (
        <div>
            {/* <Container > */}
                <Carousel>
                    <Carousel.Item>
                        <img className='imag-width' src={Financial} alt="" />
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={ITInfomation} className='imag-width' alt="" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={jobs} className='imag-width' alt="" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Traning} className='imag-width' alt="" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            {/* </Container> */}
        </div>
    );
}

export default CarouselPage;
