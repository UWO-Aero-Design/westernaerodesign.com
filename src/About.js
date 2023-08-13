import { ParallaxLayer } from '@react-spring/parallax'

import vid from "./assets/planeVideo.mp4"

import { useWindowSize } from "@uidotdev/usehooks";


const About = () => {
  const size = useWindowSize();

  return (
    <ParallaxLayer offset={1}>
      <section id="about" className='mx-auto scroll-m-20'>
        <div className="flex relative h-full" style={{aspectRatio: `${size.width}/${size.height}`}}>
            <video autoPlay loop muted className="object-cover w-full">
              <source src={vid} />
            </video>
            <ParallaxLayer speed={0.8} offset={0.99}>
              <div className='text-lg leading-loose lg:my-16 m-8 lg:w-1/2 absolute lg:right-16 bg-black/70 text-gray-300 lg:p-10 p-4'>
              <h1 className='text-center lg:pb-5 pb-2 mb-2 lg:mb-10 border-b-2 font-bold lg:text-4xl text-2xl'>About Us</h1>

              <h2 className='font-medium lg:text-2xl text-lg'>Welcome to the home of the Western Aero Design Team</h2>

              <p className='lg:my-10 my-2 lg:text-lg text-sm'>
                The Aero Design Team here at Western is a completely student-run mega project that has been active for over 20 years, designing and building radio controlled aircrafts for competition every year.
              </p>

              <p className='lg:my-10 my-2 lg:text-lg text-sm'>
                We participate in the SAE Aero Design Competition which is held in the USA every year. This competition consists of a heavy lift contest between universities from all over the world. Teams can build planes for 3 different categories with different constraints, generally focusing on carrying as much payload as possible while completing an air circuit of the flying field.
                We build at least one plane each year for the SAE (Society of Automotive Engineers) competition, where we apply aerodynamic analysis, material selection and precise construction to design and build a plane that can withstand the tough competition.
              </p>

              {/* <p className='my-10'>
                              This mega project is a valuable learning experience and a chance to develop practical engineering skills while working with your fellow students. Western's Aero Design Team is a very rewarding extra-curricular activity for engineering students with a passion for aerospace engineering or a love for aircraft design.
                              Students from all engineering disciplines are encouraged to join us. Our team utilizes a wide variety of engineering skills from mechanical, to civil and electrical.  
                              For more information contact us using <a className='font-medium text-purple-700 hover:text-purple-500 transition-all duration-300' href="mailto:western.aerodesign.com">western.aerodesign@gmail.com</a>.
                              </p>   */}
            </div>
            </ParallaxLayer>

        </div>
      </section>

    </ParallaxLayer>
  )
}

export default About;