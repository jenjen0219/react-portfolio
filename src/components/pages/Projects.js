import React, { useState, useRef } from 'react'
import Overlay from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import profile from "../assets/images/project1Pic.png";


function Projects() {

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

                <Container style={containerEl}>
                    <p >
                        Road Trip Weather Planner


                    </p>
                    <img src={profile}

                        className="rounded img-fluid project-image"

                    ></img>

                </Container>

            </div>
        </>
    )
}
export default Projects