import Logo from './assets/logo_plane.png'
import Facebook from './assets/facebook.svg'
import Instagram from './assets/instagram.svg'
import Linkedin from './assets/linkedin.svg'

const Navbar = () => {

    return (
        <header className='sticky top-0 w-screen justify-center md:flex align-center bg-white bg-opacity-80 z-20 shadow-lg py-2 hidden '>
            <a className='navbar-item w-12 my-auto' href="#home">
                <img src={Logo} alt="Western Aero Design"></img>
            </a>
            <div className='flex mx-32'>
                <a className='navbar-item' href="#home"><p>Home</p></a>
                <a className='navbar-item' href="#about"><p>About</p></a>
                <a className='navbar-item' href="#team"><p>Team</p></a>
                <a className='navbar-item' href="#support"><p>Support</p></a>
                <a className='navbar-item' href="#contact"><p>Contact</p></a>
            </div>
            <div className='my-auto flex'>
                <a href="https://www.facebook.com/WesternAeroDesign" target="_blank" rel="noreferrer noopener">
                    <img className='w-4 mx-2' src={Facebook} alt="Facebook"></img>
                </a>
                <a href="https://www.instagram.com/westernaerodesign/" target="_blank" rel="noreferrer noopener">
                    <img className='w-6 mx-2' src={Instagram} alt="Instagram"></img>
                </a>
                <a href="https://www.linkedin.com/company/aero-design-western" target="_blank" rel="noreferrer noopener">
                    <img className='w-6 mx-2' src={Linkedin} alt="Linkedin"></img>
                </a>
            </div>
        </header>
    )
}


export default Navbar;