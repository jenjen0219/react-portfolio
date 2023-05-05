import React from 'react'
import profile from "../assets/images/wenatcheeHiking.png";

function AboutMe() {
    return (

        <div className="containerEl">

            <div className='greeting'>
                <h1>
                    About Me
                </h1>

                <p>
                    My name is Jennifer, but I prefer to go by Jen. I hold a dual degree in Management Information Systems and Marketing from Washington State University. During my studies, I rediscovered my love for coding, which I had first experienced during an HTML web-design course I took a few years prior at Wenatchee Valley College. Currently, I am attending the UW Fullstack Coding Bootcamp in pursuit of a junior software engineering role.

                    <br />
                    <br />

                    Currently, I'm a Data Center Technician for T-Mobile over in East Wenatchee, WA. I'm on the decommissions team that is responsible for the removal of IT devices and equipment. Speaking of Wenatchee, my family has lived here for the last 14 years. My parents and most of my family are originally from Michoacan, Mexico and I was born and raised in Los Angeles, CA over in Huntington Park (yes, different from Huntington Beach).



                    <br />
                    <br />
                    I have a love for indie music and painting! I'm expecting to see Tennis on the 21st of April this year and Men I Trust over in May. I'm mastering oil paint as of now and enjoy going on hikes. I go on two hikes every weekend to zone out with the beautiful scenery in Wenatchee.

                </p>

                <img src={profile} className='img-fluid shadow-4' alt='profile ' width={800} height={200} />
                <p>
                    If you have any questions then move over to the contact tab or take a look at my portfolio and resume to get an idea of what I can build! :)
                </p>
            </div>

        </div>
    )
}

export default AboutMe