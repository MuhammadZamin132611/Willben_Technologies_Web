import { Container, Row, Col } from "react-bootstrap";

function ItSolution() {
    return (
        <div className="background py-5">
            <Container>
                <h1 className="text-center pb-4">IT Solution</h1>
                <Row className="grid gap-3">
                    <Col className="bg-white shadow p-2 px-3">
                        <h2 className="px-3">Website Designing</h2>
                        <ul>
                            <li>Static Responsive Deigning</li>
                            <li>Dynamic Responsive Designing</li>
                        </ul>
                    </Col>
                    <Col className="bg-white shadow p-2 px-3">
                        <h2 className="px-3">Graphic Designing</h2>
                        <ul>
                            <li>Logo Design</li>
                            <li>Banner Design</li>
                            <li>Flyers Design</li>
                        </ul>
                    </Col>
                    <Col className="bg-white shadow p-2 px-3">
                        <h2 className="px-3">App Development</h2>
                        <ul>
                            <li>Web Application Development</li>
                            <li>Android App Development</li>
                            <li>IoS App Development</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="pt-5 grid gap-4">
                    <Col className="bg-white shadow p-2 px-3">
                        <h2 className="px-3">Website Development</h2>
                        <ul>
                            <li>Web Applications</li>
                            <li>Web Administration</li>
                            <li>CMS</li>
                            <li>Ecommerce Development</li>
                            <li>Portfolio Development</li>
                        </ul>
                    </Col>
                    <Col className="bg-white shadow p-2 px-3">
                        <h2 className="px-3">DIGITAL MARKETING</h2>
                        <ul>
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