import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import resume from "../assets/resume.pdf"


import "./Banner.css"

export const Banner = () => {

    return (
        <section className="banner" id="about">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <div className="">
                            {/* <span className="tagline">Welcome to my Portfolio</span> */}
                            <h1>{"Hi, I'm Lydia."}<br />
                            </h1>
                            <p> This is the work-in-progress accumulation of my past work as well as a testing ground for any passion projects. Here you can find my experience, familiar technologies, and recent projects. Please feel free to look around or glance at my <a href={resume} className="resume-link" target="_blank"> resume. </a></p>
                            {/* <Nav.Link className="" href="#connect"><button> Let's connect <Nav.Link href="#connect"><ArrowRightCircle size={25} /></Nav.Link></button></Nav.Link> */}
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}