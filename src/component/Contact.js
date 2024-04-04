import { Col, Container, Row } from "react-bootstrap";

function Contact() {
    return (
        <Container>
            <div className="py-5">
                <h1 className="text-center pb-3">Contact Us</h1>
                <Row className="grid gap-3">
                    <Col className="bg-secondary-subtle rounded shadow p-3 text-center">
                        <div>
                            <i class="fa-solid fa-location-dot fs-6 p-4 bg-white rounded-pill mt-5 text-primary"></i>
                        </div>
                        <h4 className="py-3">ADDRESS</h4>
                        <p>MB-11, Block-B-21, Laurang House, Kasturba Gandhi Marg, Connaught Place, New Delhi-110001 </p>
                    </Col>
                    <Col className="bg-secondary-subtle rounded shadow p-3 text-center">
                        <div>
                            <i class="fa-brands fa-whatsapp fs-6 p-4 bg-white rounded-pill mt-5 text-primary"></i>
                        </div>
                        <h4 className="py-3">CONTACT NUMBER</h4>
                        <p><a className="link-underline link-underline-opacity-0 text-dark" href="tel:+1234567890">(+91) 96501 94945</a></p>
                    </Col>
                    <Col className="bg-secondary-subtle rounded shadow p-3 text-center">
                        <div>
                            <i class="fa-solid fa-paper-plane fs-6 p-4 bg-white rounded-pill mt-5 text-primary"></i>
                        </div>
                        <h4 className="py-3">EMAIL ADDRESS</h4>
                        <p><a className="link-underline link-underline-opacity-0 text-dark" href="mailto:recipient@example.com">willbentechnology@gmail.com</a></p>
                    </Col>
                    <Col className="bg-secondary-subtle rounded shadow p-3 text-center">
                        <div>
                            <i class="fa-solid fa-earth-americas fs-6 p-4 bg-white rounded-pill mt-5 text-primary"></i>
                        </div>
                        <h4 className="py-3">WEBSITE</h4>
                        <p><a className="link-underline link-underline-opacity-0 text-dark" href="http://willbentechnologies">willbentechnology.com</a></p>
                    </Col>
                    
                </Row>
            </div>
        </Container>
    )
}

export default Contact;