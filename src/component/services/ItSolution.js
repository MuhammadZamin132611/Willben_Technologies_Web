import { Container, Row, Col } from "react-bootstrap";

function ItSolution() {
    return (
        <div className="background py-5">
            <Container>
                <h1 className="text-center pb-4">IT Solution</h1>
                <Row className="grid gap-3">
                    <Col className="bg-white shadow p-2 px-3">
                        <h4>Website Designing</h4>
                        <ul className="list-unstyled">
                            <li>Static Responsive Deigning</li>
                            <li>Dynamic Responsive Designing</li>
                        </ul>
                    </Col>
                    <Col className="bg-white shadow p-2 px-3">
                        <h4>Graphic Designing</h4>
                        <ul className="list-unstyled">
                            <li>Logo Design</li>
                            <li>Banner Design</li>
                            <li>Flyers Design</li>
                        </ul>
                    </Col>
                    <Col className="bg-white shadow p-2 px-3">
                        <h4>App Development</h4>
                        <ul className="list-unstyled">
                            <li>Web Application Development</li>
                            <li>Android App Development</li>
                            <li>IoS App Development</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="pt-5 grid gap-4">
                    <Col className="bg-white shadow p-2 px-3">
                        <h4>Website Development</h4>
                        <ul className="list-unstyled">
                            <li>Web Applications</li>
                            <li>Web Administration</li>
                            <li>CMS</li>
                            <li>Ecommerce Development</li>
                            <li>Portfolio Development</li>
                        </ul>
                    </Col>
                    <Col className="bg-white shadow p-2 px-3">
                        <h4>DIGITAL MARKETING</h4>
                        <ul className="list-unstyled">
                            <li>SEO / SEM / PPC</li>
                            <li>Social Media Marketing</li>
                            <li>Content Marketing</li>
                            <li>Affiliate Marketing</li>
                            <li>Video Marketing</li>
                            <li>Influencer Marketing</li>
                            <li>Bulk E-Mail / SMS / WhatsApp</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ItSolution;