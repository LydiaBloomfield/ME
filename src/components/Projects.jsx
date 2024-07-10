import "./Projects.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ME from "../assets/ME.png"
import me from "../assets/mee.png"
import { CardImage } from "react-bootstrap-icons";

export const Projects = () => {

    return (
        <>
            <h1>Projects</h1>
            <div className="card-container">
                <Card className="card">
                    <img className="project-image-1" src={ME}/>
                    <Card.Body className="body">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Img className="project-image-2" variant="top" src={ME} />
                    <Card.Body className="body">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Img className="project-image-3" variant="top" src={ME} />
                    <Card.Body className="body">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                
            </div>
        </>
    );
}

export default Projects