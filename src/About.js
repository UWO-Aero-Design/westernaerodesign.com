import plane from "./assets/plane.jpg"
import plane2 from "./assets/plane2.jpg"
import plane3 from "./assets/plane3.jpg"

import ImageGallery from "react-image-gallery";

const images = [ 
    {
      original: plane,
    },
    {
      original: plane2,
    },
    {
      original: plane3,
    },
  ];

const About = () => {
    return (
        <section id="about" className='my-16 md:mx-28 mx-12 mx-auto scroll-m-20'>
            <h1 className='text-center pb-5 mb-10 border-b-2 font-bold text-4xl'>About Us</h1>
                    <div>
                    <h2 className='font-medium text-2xl'>Welcome to the home of the Western Aero Design Team</h2> 
                        <div className='text-lg leading-loose'>
                            <p className='my-10'>
                            The Aero Design Team here at Western is a completely student-run mega project that has been active for over 20 years, designing and building radio controlled aircrafts for competition every year.
                            </p>    

                            <p className='my-10'>
                            We participate in the SAE Aero Design Competition which is held in the USA every year. This competition consists of a heavy lift contest between universities from all over the world. Teams can build planes for 3 different categories with different constraints, generally focusing on carrying as much payload as possible while completing an air circuit of the flying field. 
                            We build at least one plane each year for the SAE (Society of Automotive Engineers) competition, where we apply aerodynamic analysis, material selection and precise construction to design and build a plane that can withstand the tough competition. 
                            </p>    

                            <p className='my-10'>
                            This mega project is a valuable learning experience and a chance to develop practical engineering skills while working with your fellow students. Western's Aero Design Team is a very rewarding extra-curricular activity for engineering students with a passion for aerospace engineering or a love for aircraft design.
                            Students from all engineering disciplines are encouraged to join us. Our team utilizes a wide variety of engineering skills from mechanical, to civil and electrical.  
                            For more information contact us using <a className='font-medium text-purple-700 hover:text-purple-500 transition-all duration-300' href="mailto:western.aerodesign.com">western.aerodesign@gmail.com</a>.
                            </p>  
                        </div>
                    </div>
                    <div className="bg-black">
                    <ImageGallery items={images}/>
                    </div>
        </section>
    )
}

export default About;