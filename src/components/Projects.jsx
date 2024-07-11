import "./Projects.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ME from "../assets/ME.png"
import fish from "../assets/fish.png"
import carryOn from "../assets/carryOn.png"
import { CardImage } from "react-bootstrap-icons";

export const Projects = () => {

    return (
        <>
            <h1>Projects</h1>
            <div className="card-container">
                <Card className="card">
                    <img className="project-image-1" src={carryOn} />
                    <Card.Body className="body">
                    <h3>Carry On</h3>
                    <Card.Text>
                            A full-stack travel application designed for all of your potential travel needs. Functionality includes a financial planner, packing list, agenda, and map of previous destinations. Built with a MERN stack.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Img className="project-image-2" variant="top" src={fish} />
                    <Card.Body className="body">
                        <h3>F.I.S.H.</h3>
                        <Card.Text className="card-text">
                            A winning project from State Farm's 2024 Hack Day. Full-stack mapping application built from Python and Svelte. Project content and code is confidential.
                        </Card.Text>
                        {/* <Button className= "button" variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Img className="project-image-3" variant="top" src={ME} />
                    <Card.Body className="body">
                        <h3> My Portfolio </h3>
                        <Card.Text className="card-text">
                            Project-ception! This portfolio site has been a lesson in JavaScript, HTML, and CSS as all styling and composition has been done by hand.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>

            </div>
        </>
    );
}

export default Projects