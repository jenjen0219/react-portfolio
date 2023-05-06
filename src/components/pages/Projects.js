import React, { useState, useRef } from 'react'
// import Overlay from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import profile from "../assets/images/project1Pic.png";


function Projects({ projects }) {

    const containerEl = {
        backgroundColor: "white",
        color: "black",
        padding: "50px",
        margin: "25px",
        borderRadius: "3.5rem",
    };

    return (
        <>
            <div>
                <h1>
                    Projects
                </h1>

                {
                    projects.map((project) => {
                        return (


                            <Container style={containerEl}>
                                <p >
                                    {project.title}
                                </p>
                                <img src={project.image}

                                    className="rounded img-fluid project-image"

                                ></img>

                            </Container>

                        )

                    })
                }

            </div>
        </>
    )
}
export default Projects