import profile from "./assets/images/profilePic.png";

export default function Banner() {
    return (
        <div className="bannerEl">
            <img src={profile} className='img-fluid shadow-4' alt='profile ' width={200} height={200} />
            <div className='flex-start mx-3 bannerElText'>
                <h2 className='my-2'>Jennifer Gutierrez Manjares - JGM</h2>
                <p className='my-2'>
                    May 2022 - WSU Bachelor of Business Administration BBA in Management Information Systems and Marketing
                </p>
                <p className='my-2 '>
                    May 2023 - UW Fullstack Coding Bootcamp
                </p>
            </div>

        </div>

    )
}
