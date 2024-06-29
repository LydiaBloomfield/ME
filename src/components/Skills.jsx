import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Skills.css"
import { Col, Row, Container } from 'react-bootstrap';

import java from "../assets/technologies/java.png"
import cpp from "../assets/technologies/c++.svg"
import python from "../assets/technologies/python.png"
import javascript from "../assets/technologies/javascript.png"
import css from "../assets/technologies/css.png"
import html from "../assets/technologies/html.png"
import git from "../assets/technologies/git.png"
import react from "../assets/technologies/react.png"
import sql from "../assets/technologies/sql.png"
import mongodb from "../assets/technologies/mongodb.png"
import node from "../assets/technologies/node.png"
import gosu from "../assets/technologies/gosu.png"
import R from "../assets/technologies/R.png"

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 7,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };

    return (
        // <section className="skill" id="skills">
        //     <Container>
        //         <Row>
        //             <Col>
        //                 <div className="skill-bx">
        //                     <h2>
        //                         Technologies
        //                     </h2>
        //                     <p></p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={java} alt="image" />
                                    <h5> Java </h5>
                                </div>
                                <div className="item">
                                    <img src={python} alt="image" />
                                    <h5> Python </h5>
                                </div>
                                <div className="item">
                                    <img src={cpp} alt="image" />
                                    <h5> C++ </h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="image" />
                                    <h5> Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="image" />
                                    <h5> React</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="image" />
                                    <h5> html</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="image" />
                                    <h5> CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={sql} alt="image" />
                                    <h5> SQL</h5>
                                </div>
                                {/* FIX this one */}
                                <div className="item">
                                    <img src={R} alt="image" />
                                    <h5> R </h5>
                                </div>
                                <div className="item">
                                    <img src={git} alt="image" />
                                    <h5> git</h5>
                                </div>
                                <div className="item">
                                    <img className= "image" src={mongodb} alt="image" />
                                    <h5> mongoDB</h5>
                                </div>
                                <div className="item">
                                    <img src={node} alt="image" />
                                    <h5> node.JS</h5>
                                </div>
                                <div className="item">
                                    <img src={gosu} alt="image" />
                                    <h5> Gosu </h5>
                                </div>
                            </Carousel>
                        // </div>
        //             </Col>
        //         </Row>
        //     </Container>
        // </section>
    )
}

export default Skills;
