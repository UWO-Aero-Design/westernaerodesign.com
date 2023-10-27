import Armatec from './assets/sponsors/armatec.png'
import Siemens from './assets/sponsors/siemens.jpg'
import Diamond from './assets/sponsors/diamond.png'
import RC from './assets/sponsors/ModelRC.gif'
import Schaeffler from './assets/sponsors/Schaeffler.png'
import SolidWorks from './assets/sponsors/SolidWorks-Logo.png'
import Design2Reality from "./assets/sponsors/design2reality.png";
import TrackUnit from "./assets/sponsors/Trackunit.png";
import SponsorshipPackage from "./assets/sponsors/Sponsorship-Package.pdf";
import Protocase from "./assets/sponsors/Protocase.png";
import WhyDesign from "./assets/sponsors/WhyDesign.png";
import Western from "./assets/sponsors/Western.jpg"

//Rename support to industry sponsors (Add Schefeler and London Model RC photos for sponsership)

const Support = () => {
    return (
        <section id="support" className='my-16 md:mx-28 mx-12 mx-auto scroll-m-20'>
            <h1 className='text-center pb-5 mb-10 border-b-2 font-bold text-4xl'>Industry Sponsors</h1>
            <div>
            <h2 className='font-medium text-2xl'>Interested in becoming a sponsor?</h2> 
            <p className='py-3 text-lg'>
                Feel free to take a look at our <a download="Sponsorship Package" className='font-medium text-purple-700 hover:text-purple-500 transition-all duration-300' href={SponsorshipPackage}> sponsorship package </a> and send us an email at <a className='font-medium text-purple-700 hover:text-purple-500 transition-all duration-300' href="mailto:western.aerodesign.com">western.aerodesign@gmail.com</a>. 
                We look forward to working with you!
            </p>
            </div>
            <h3 className='text-5xl font-bold text-center my-8 py-4 text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-blue-500 border-b-2'>TITLE SPONSOR</h3>
            <div className="grid place-items-center grid-cols-1 gap-6">
                <a href="https://www.eng.uwo.ca/"><img className='my-2 hover:-translate-y-1 hover:scale-110 duration-300 lg:px-96 md:px-32 w-full'src={Western} alt='Western Engineering'></img>
                </a>
            </div>
            <h3 className='text-5xl font-bold text-center my-8 py-4 text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-yellow-500 border-b-2 '>GOLD SPONSORS</h3>
            <div className="grid place-items-center grid-cols-1 lg:grid-cols-3 gap-6">
                <a href="http://www.armateconline.com/"><img className='my-2 hover:-translate-y-1 hover:scale-110 duration-300' src={Armatec} alt='Armatec'></img>
                <figcaption className="pt-4 text-center text-gray-800 italic font-semibold">
                    Mission Critical Protection from the Inside out
                </figcaption>
                </a>
                <a href="https://www.schaeffler.com/en/"><img className='my-2 px-10 hover:-translate-y-1 hover:scale-110 duration-300' src={Schaeffler} alt='Schaeffler'></img>
                <figcaption className="pt-8 text-center text-gray-800 italic font-semibold">
                    We Pioneer Motion
                </figcaption>
                </a>
                <a href="https://www.diamondaircraft.com/en/"><img className='my-2 px-10 hover:-translate-y-1 hover:scale-110 duration-300' src={Diamond} alt='Diamond'></img>
                <figcaption className="pt-4 text-center text-gray-800 italic font-semibold">
                    For the Passion of Flying
                </figcaption></a>
            </div>
            <h3 className='text-4xl font-bold text-center my-8 py-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-silver-500 border-b-2 '>SILVER SPONSORS</h3>
            <div className="grid place-items-center grid-cols-2 lg:grid-cols-4 gap-5">
                <a href="https://www.siemens.com/ca/en.html"><img className='my-2 hover:-translate-y-1 hover:scale-110 duration-300' src={Siemens} alt='Siemens'></img></a>
                <a href="https://lmac.ca/"><img className='my-2 lg:px-24 px-12 hover:-translate-y-1 hover:scale-110 duration-300' src={RC} alt='London Model Aircraft Club'></img></a>
                <a href="https://my.solidworks.com/"><img className='my-2 hover:-translate-y-1 hover:scale-110 duration-300' src={SolidWorks} alt='SolidWorks'></img></a>
                <a href="https://www.facebook.com/profile.php?id=100064022019949&mibextid=ZbWKwL"><img className='my-2 hover:-translate-y-1 hover:scale-110 duration-300' src={Design2Reality} alt='Design2Reality'></img></a>
                <a href="https://trackunit.com/"><img className='my-2 hover:-translate-y-1 hover:scale-110 duration-300' src={TrackUnit} alt='TrackUnit'></img></a>
                <a href="https://whydesign.ca/"><img className='my-2 hover:-translate-y-1 hover:scale-110 duration-300' src={WhyDesign} alt='WhyDesign'></img></a>
            </div>
            <h3 className='text-3xl font-bold text-center my-8 py-4  text-transparent bg-clip-text bg-gradient-to-br from-gray-500 to-orange-500 border-b-2 '>BRONZE SPONSORS</h3>
            <div className="grid place-items-center grid-cols-2 lg:grid-cols-5 gap-5">
                <a href="https://www.protocase.com/"><img className='my-2 md:px-10 px-4 hover:-translate-y-1 hover:scale-110 duration-300' src={Protocase} alt='Protocase'></img></a>
            </div>
            <div style={{scrollSnapStop: "always"}}>

            </div>
        </section>
    )
}

export default Support;