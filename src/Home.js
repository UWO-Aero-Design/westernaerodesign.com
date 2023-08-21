import Logo from './assets/logo.png'
import { ParallaxLayer } from '@react-spring/parallax'
import main from "./assets/main.jpeg"
import transition from "./assets/transition.png"

const Home = () => {

    return (
        <div>
            <ParallaxLayer id="home" offset={0} style={{ backgroundImage: `url(${main})`, backgroundSize: "cover", backgroundPosition: "center" }} className='object-center'>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1} >
                <div className="flex flex-grow h-screen">
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

            </ParallaxLayer>
            <ParallaxLayer offset={0.9} speed={1} factor={0.1}>
                <img src={transition} alt="home" className="w-full object-cover" />
            </ParallaxLayer>
        </div>
    )
}

export default Home;