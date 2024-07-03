import { React } from 'react';
import "./Skills.css"
import cpp from "../assets/technologies/cpp.svg";
import gosu from "../assets/technologies/gosu.png";
import css from "../assets/technologies/css.png";
import git from "../assets/technologies/git.png";
import html from "../assets/technologies/html.png";
import java from "../assets/technologies/java.png";
import javascript from "../assets/technologies/javascript.png";
import mongodb from "../assets/technologies/mongodb.png";
import node from "../assets/technologies/node.png";
import python from "../assets/technologies/python.png";
import r from "../assets/technologies/R.png";
import react from "../assets/technologies/react.png";
import sql from "../assets/technologies/sql.png";

const Skills = () => {
    return (
        <div className="skills" id='skills'>
            <h1 className='skills-title'>Technologies</h1>
            <div className='skills-container'>
                <img className="skill" src={css}></img>
                <img className="skill" src={cpp}></img>
                <img className="skill" src={gosu}></img>
                <img className="skill" src={html}></img>
                <img className="skill" src={java}></img>
                <img className="skill" src={javascript}></img>
                <img className="skill" src={python}></img>
                <img className="skill" src={mongodb}></img>
                <img className="skill" src={r}></img>
                <img className="skill" src={cpp}></img>
                <img className="skill" src={git}></img>
                <img className="skill" src={node}></img>
                <img className="skill" src={react}></img>
                <img className="skill" src={sql}></img>
            </div>

        </div>
    )
}

export default Skills