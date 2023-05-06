import React from 'react'
import Projects from './Projects';
import profile from "../assets/images/project1Pic.png";

const projects = [
  {
    title: "Witches Brew & Eats",
    image: profile,
    links: {
      github: "https://github.com/jenjen0219",
      live: ""
    }
  },
  {
    title: "Road Trip Weather Planner 2",
    image: profile,
    links: {
      github: "https://github.com/jenjen0219",
      live: ""
    }
  },
  {
    title: "Road Trip Weather Planner 3",
    image: profile,
    links: {
      github: "https://github.com/jenjen0219",
      live: ""
    }
  },
  {
    title: "Road Trip Weather Planner 4",
    image: profile,
    links: {
      github: "https://github.com/jenjen0219",
      live: ""
    }
  },
  {
    title: "Road Trip Weather Planner 5",
    image: profile,
    links: {
      github: "https://github.com/jenjen0219",
      live: ""
    }
  },
  {
    title: "Road Trip Weather Planner 6",
    image: profile,
    links: {
      github: "https://github.com/jenjen0219",
      live: ""
    }
  },
]

function Portfolio() {
  return (
    <Projects projects={projects} />
  )
}

export default Portfolio