

const Contact = ({ Image }) => {

    return (
        <section id="contact" className='my-28 w-3/4 mx-auto scroll-m-20'>
            <h1 className='text-center my-5 font-bold text-xl'>Contact</h1>
            <p className='text-center text-lg'>
                Still have a question? Feel free to contact us for more information on team details, student life or any other questions you may have. <br/>
                <br/>
                <a className='font-medium text-purple-700 hover:text-purple-500 transition-all duration-300' href="mailto:western.aerodesign.com" target="_blank" rel="noreferrer noopener">
                    western.aerodesign@gmail.com
                </a>
                <br/>
                <a className='font-medium text-purple-700 hover:text-purple-500 transition-all duration-300' href="https://www.facebook.com/WesternAeroDesign" target="_blank" rel="noreferrer noopener">
                    facebook.com/WesternAeroDesign
                </a>
                <br/>
                <a className='font-medium text-purple-700 hover:text-purple-500 transition-all duration-300' href="https://www.instagram.com/westernaerodesign/" target="_blank" rel="noreferrer noopener">
                    instagram.com/westernaerodesign
                </a>
                <br/>
                <a className='font-medium text-purple-700 hover:text-purple-500 transition-all duration-300' href="https://www.linkedin.com/company/aero-design-western" target="_blank" rel="noreferrer noopener">
                    linkedin.com/company/aero-design-western
                </a>
                <br/>
            </p>
        </section>
    )
}

export default Contact;