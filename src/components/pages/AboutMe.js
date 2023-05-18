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
                    I'm originally from Los Angeles, CA. More specifically from Huntington Park which, yes, is different than Huntington Beach. My family moved on up to the small town of Wenacthee, WA about 14 years ago and I've been enjoying myself here since. I have slowly become more and more of a fan of the state of Washington and have hopes of moving to Seattle, WA to continue on my career in software engineering.

                    <br />
                    <br />

                    However, when I'm not coding I often find myself painting, collecting vinyl records, travelling, and going on hikes. Oil paints are currently the medium of my focus and I gravitate towards painting anything that I find beautiful. I have an album on my phone that I fill with things I came across that left me breathless and or moved in some way. For my vinyl collection, I've got records from Barbra Streisand, Cher, The Righteous Brothers, Marvin Gaye, Madonna, and The Browns to name a few. I've travlled to France, Spain, Mexico, and quite a few states here in the US. Check out the photo down below to see the amazing view from one of my favortie hikes in Wenatchee that doesn't quite have a name so I'm sorry if you wanted to check it out!

                    <br />
                    <br />
                    <img src={profile} className='img-fluid shadow-4' alt='profile ' width={800} height={200} />

                    <br />
                    <br />
                    Now that my bootcamp is complete, my main focus is of strengthening my coding skills and developping myself professionally. My main goal for the next 6-9 months is to land a back-end software engineering role. My goal for the next 10 years is to be able to say that I helped countless of Latinos within my community with improving their businesses and overall passions. In my town of Wenatchee there is a great population of Latinos who tirelessly put in the work to upkeep other business and quite a few have business of their own. However, my dream is to improve upon any outdated programs or functionalities within these Latino owned businesses to help them grow sustainably and produce generational weatlth for generations to come. The outcome of my dream would be a stronger Latino community that has the proper tools, systems, and knowledge to reach much higher goals than ever believed before.

                </p>


                <p>
                    If you have any questions then move over to the contact tab or take a look at my portfolio and resume to get an idea of what I can build!
                </p>
            </div>

        </div>
    )
}

export default AboutMe