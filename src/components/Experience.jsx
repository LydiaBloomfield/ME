import "./Experience.css"
import { useState, useEffect } from "react";

export const Experience = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 1) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    })
    return (
        <>
            <h1  className="experience-title" >Experience</h1>
            <section  className={scrolled ? "experiences-1" : "experience-scrolled" }>
                <div className="experience-company" >
                    <h2 >State Farm</h2>
                    <p>May 2024 - Present</p>
                </div>
                <h3>Software Engineer Intern</h3>
                <h4> DevOps Enablement Team</h4>
                <ul className='experience-desc'>
                    <li>
                        Migrated tools from CaaS to AWS through utilization of various AWS services, such as Lambda, API Gateway, and S3.
                    </li>
                </ul>
            </section>
            <section className={scrolled ? "experiences-2" : "experience-scrolled"}>
                <div className="experience-company">
                    <h2>State Farm</h2>
                    <p>May 2023 - Aug 2023</p>
                </div>
                <h3>Software Engineer Intern</h3>
                <h4> DevOps Enablement Team</h4>
                <ul className='experience-desc'>
                    <li className="showme">
                        Fully developed the API for a tool with 75,000 data entries and capable of being used by the entire P&C Auto/Fire division of the company.
                    </li>
                    <li>
                        Implemented front and back end components utilizing Python, ReactJS, Flask, and SQL.
                    </li>
                    <li>
                        Created a consultation request capability allowing consumers of the team's product to request assistance. Requests directly generate gitLab issues for the team's review.
                    </li>
                </ul>
            </section>
            <h1 id="experience"></h1>

            <section className={scrolled ? "experiences-3" : "experience-scrolled"}>
                <div className="experience-company">
                    <h2>State Farm</h2>
                    <p>May 2022 - Aug 2022</p>
                </div>
                <h3>Software Engineer Intern</h3>
                <h4> Customer Data Team</h4>
                <ul className='experience-desc'>
                    <li>
                        Enhanced Customer Data Integrator and Policy Center.
                    </li>
                    <li>
                        Worked with Java and Guidewire-specific Gosu for issues relating to performance improvements, test cases, and consolidation across codebases.
                    </li>
                </ul>
            </section>
            <section className={scrolled ? "experiences-4" : "experience-scrolled"}>
                <div className="experience-company">
                    <h2>University of Oklahoma</h2>
                    <p>Jan 2021 - May 2021</p>
                </div>
                <h3>Teaching Assistant</h3>
                <h4> Introduction to Personality</h4>
                <ul className='experience-desc'>
                    <li>
                        Used my own proficiency in psychological concepts to foster understanding in 30 students.
                    </li>
                    <li>
                        Provided concise and kind feedback on over 25 assignments per student.
                    </li>

                </ul>
            </section>
        </>
    )
}