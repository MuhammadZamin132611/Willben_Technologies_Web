import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import Container from 'react-bootstrap/Container';
import Financial from '../assets/financial-service.jpeg'
import CompanyInfomation from '../assets/company-formation.jpeg'
import ItSolution from '../assets/it-solution.jpeg'
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
                        <img src={CompanyInfomation} className='imag-width' alt="" />
                        <Carousel.Caption>
                            <h3>Company Formation</h3>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={ItSolution} className='imag-width' alt="" />
                        <Carousel.Caption>
                            <h3>IT Solution</h3>
                            {/* <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Traning} className='imag-width' alt="" />
                        {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            {/* </Container> */}
        </div>
    );
}

export default CarouselPage;
