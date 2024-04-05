import { Container, Row, Col } from "react-bootstrap";

function PlcamentAndTraning() {
    return (
        <div className="py-5">
            <Container>
                <h1 className="text-center pb-3">Placement And Traning</h1>
                <Row className="grid gap-3">
                    <Col className="bg-white shadow p-2 px-3">
                        <h4>Job Placement</h4>
                        <ul className="list-unstyled">
                            <li>Placement Consultancy Services</li>
                            <li>HR Services</li>
                            <li>Manpower Recruitment Services</li>
                            <li>Career Consultant Services</li>
                            <li>Head Hunting Services</li>
                            <li>Job Fair / CampusRecruitments</li>
                        </ul>
                    </Col>
                    <Col className="bg-white shadow p-2 px-3">
                        <h4>Traning</h4>
                        <ul className="list-unstyled">
                            <li>Carrer Counselling</li>
                            <li>Skill Development</li>
                            <li>English Communication</li>
                            <li>Personality Development</li>
                            <li>Interview Skills</li>
                            <li>Sales Skills</li>
                            <li>Basic Computer</li>
                        </ul>
                    </Col>
                    <Col className="bg-white shadow p-2 px-3">
                        <h4>Skill Development</h4>
                        <ul className="list-unstyled">
                            <li>Soft Skills</li>
                            <li>Human Resource Management </li>
                            <li>Finance</li>
                            <li>Sales/ Marketing</li>
                            <li>Law/Legal</li>
                            <li>Digital Marketing</li>
                            <li>Web Development</li>
                            <li>Web/Graphic Designing</li>
                            <li>Data Science</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="grid gap-3 pt-4">
                    <Col className="bg-white shadow p-2 px-3">
                        <h4>TRANING & DEVELOPMENT</h4>
                        <p><b>TRANING</b> is short term, task oriented and targeted on achieving a
                            change of attitude, skills and knowledge in a specific area. It is usually
                            job related.</p>
                        <p><b>DEVELOPMET</b>
                            is a long-term investment in human resources. It refers
                            to the learning opportunities designed to help employees grow.
                        </p>
                        <h4 className="text-danger">IMPORTANCE:</h4>
                        <ul className="list-unstyled">
                            <li>Achieves learning about new things; Technology,
                                products/ services delivery</li>
                            <li>Reduces mistakes - minimizing costs</li>
                            <li>Opportunity for staff to suggest improvements</li>
                            <li>Improves communication & relationship - better
                                teamwork</li>
                            <li>Refreshes memory of old employees</li>
                            <li>Healthy working environment</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PlcamentAndTraning;