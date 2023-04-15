import Navigation from "./Navigation";

function Header() {
  return (
    <container>
    <Navigation />
    <img src="./public/assets/images/headerBannerStdDesktop.png" className='img-fluid shadow-4' alt='sunset gradient'/>
    <img src="./public/assets/images/profilePicStdDesktop.png" className='img-fluid shadow-4' alt='profile picture'/>
    <h4>
      WSU - Bachelor of Business Administration (BBA) in Management Information Systems and Marketing
    </h4>
    <h4>
      Enrolled in UW Fullstack Coding Bootcamp
    </h4>
</container>
  );
}

export default Header