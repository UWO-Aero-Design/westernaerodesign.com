import Logo from './assets/logo.png'

const Home = () => {

    return (
        <div id='home' className="flex flex-col h-screen">
            <div className="bg-hero bg-top flex flex-grow bg-no-repeat bg-cover mix-blend-multiply">
                <div className="m-auto">
                    <div>
                        <img src={Logo} alt="Western Aero Design" className="h-40"></img>
                        <p className="text-gray-100 text-center text-3xl mt-4 tracking-widest">
                            <span className='animate-text'>Design</span><span>. </span>
                            <span className='animate-text animation-delay-500'>Build</span><span>. </span>
                            <span className='animate-text animation-delay-1000'>Fly</span><span>. </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;