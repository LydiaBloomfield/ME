import { Container, Row, Col } from "react-bootstrap"
import resume from "../assets/resume.pdf"
import "./Banner.css"

export const Banner = () => {

    return (
        <section className="banner" id="about">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <div className="">
                            <h1>{"Hi, I'm Lydia."}<br />
                            </h1>
                            <p> This is the work-in-progress accumulation of my past work as well as a testing ground for any passion projects. Here you can find my experience, familiar technologies, and recent projects. Please feel free to look around or glance at my <a href={resume} className="resume-link" target="_blank"> resume. </a></p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner