import Facebook from './assets/facebook.svg'
import Instagram from './assets/instagram.svg'
import Linkedin from './assets/linkedin.svg'

const Contact = ({ Image }) => {

    return (
        <section id="contact" className='my-16 md:mx-28 mx-12 mx-auto scroll-m-20'>
            <h1 className='text-center pb-5 mb-10 border-b-2 font-bold text-4xl'>Contact</h1>
            <p className='text-center text-lg'>
                Still have a question? Feel free to contact us for more information on team details, student life or any other questions you may have.
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="lg:py-5 py-2">
                        <a className='font-medium text-purple-700 hover:text-purple-500 transition-all duration-300' href="mailto:western.aerodesign.com" target="_blank" rel="noreferrer noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>   western.aerodesign@gmail.com
                        </a>                    
                    </div>
                    <div className="lg:py-5 py-2">
                        <a className='font-medium text-purple-700 hover:text-purple-500 transition-all duration-300' href="https://www.facebook.com/WesternAeroDesign" target="_blank" rel="noreferrer noopener">
                        <img className='w-4 mx-2 inline' src={Facebook} alt="Facebook"></img>    
                        facebook.com/WesternAeroDesign
                        </a>
                    </div>
                    <div className="lg:py-5 py-2">
                        <a className='font-medium text-purple-700 hover:text-purple-500 transition-all duration-300' href="https://www.instagram.com/westernaerodesign/" target="_blank" rel="noreferrer noopener">
                        <img className='w-6 mx-2 inline' src={Instagram} alt="Instagram"></img>

                        instagram.com/westernaerodesign
                        </a>
                    </div>
                    <div className="lg:py-5 py-2">
                        <a className='font-medium text-purple-700 hover:text-purple-500 transition-all duration-300' href="https://www.linkedin.com/company/aero-design-western" target="_blank" rel="noreferrer noopener">
                        <img className='w-6 mx-2 inline' src={Linkedin} alt="Linkedin"></img>

                        linkedin.com/company/aero-design-western
                        </a>
                    </div>

                </div>
            </p>
        </section>
    )
}

export default Contact;