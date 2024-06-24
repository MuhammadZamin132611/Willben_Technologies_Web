import { Container, Row, Col } from "react-bootstrap";

function CompanyFormation() {
    return (
        <div className="background py-5">
            <h1 className="text-center pb-3 ">Company Formation</h1>
            <Container>
                <h2 className="pb-3">The various areas we work on are</h2>
                <Row className="grid gap-3">
                    <Col  className="bg-white shadow p-2 px-3">
                        <h4>Documentation</h4>
                        <ul className="list-unstyled">
                            <li>Project Proposal Preparation.</li>
                            <li>Concept Notes & DPR</li>
                            <li>Project Guidance &amp; Reporting</li>
                        </ul>
                    </Col>
                    <Col  className="bg-white shadow p-2 px-3">
                        <h4>Accountancy & Finance</h4>
                        <ul className="list-unstyled">
                            <li>Income Tax Return</li>
                            <li>Professional Tax</li>
                            <li>GST Return/Registration</li>
                            <li>TDS</li>
                            <li>Income Tax</li>
                            <li>MSME</li>
                            <li>WAYBILL</li>
                        </ul>
                    </Col>
                    <Col className="bg-white shadow p-2 px-3">
                        <h4>Services for Non- Charitable Sector</h4>
                        <ul className="list-unstyled">
                            <li>Registration of Ltd. Companies & follow ups</li>
                            <li>Excise Registration</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="grid gap-3 pt-5">
                    <Col className="bg-white shadow p-2 px-3">
                        <h4>Registration/Amendment</h4>
                        <ul className="list-unstyled">
                            <li>NIDHI Company Registration.</li>
                            <li>National Level Society(Societies Registration Act)</li>
                            <li>Trust, 12A, 80G, LLP, Pvt. Company, One Person Company</li>
                            <li>MSME, NIDHI, HUF. etc.</li>
                            <li>School/College Affiliation</li>
                            <li>Startup Registration</li>
                            <li>ISO CERTIFICATE:9001:2015,14001,22000, 27001,HALAL,HACCP,GMP,FDA,ROHS etc.</li>
                            <li>Registration U/S 10 (23C) of Income Tax Act</li>
                            <li>FCRA Certification</li>
                            <li>FCRA Registration, Renew, Return, etc.</li>
                            <li>TRADEMARK/BRAND NAME REGISTRATION</li>
                            <li>COPYRIGHT PATENT REGISTRATION</li>
                            <li>FOOD LICENSE/FSSAI</li>
                            <li>TRADE LICENSE</li>
                            <li>FIRE LICENSE</li>
                            <li>EPF & ESI REGISTRATION AND RETURN</li>
                        </ul>
                    </Col>
                    <Col className="bg-white shadow p-2 px-3">
                        <h4>Other Professional Support</h4>
                        <ul className="list-unstyled">
                            <li>Mobile Application Development</li>
                            <li>Website Design and Development</li>
                            <li>Survey/Research/Need Assessments</li>
                            <li>Recognition of Institution from A.I.C.T.E., New Delhi</li>
                            <li>B.Ed., M.Ed., D.El.Ed., ITEP etc</li>
                            <li>ANM., GNM, B. Sc. Nursing, D. Pharma, B. Pharma Affiliation etc.</li>
                            <li>Monitoring & Evaluation</li>
                            <li>All Other IT Services</li>
                        </ul>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default CompanyFormation;