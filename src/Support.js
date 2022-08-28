import Armatec from './assets/sponsors/armatec.png'
import Siemens from './assets/sponsors/siemens.jpg'
import Diamond from './assets/sponsors/diamond.png'

const Support = () => {
    return (
        <section id="support" className='my-28 w-3/4 mx-auto scroll-m-20'>
            <h1 className='text-center my-12 font-bold text-5xl'>Supporters</h1>
            <div className="grid place-items-center grid-cols-1 lg:grid-cols-3 gap-5">
                <img className='my-2' src={Armatec} alt='Armatec'></img>
                <img className='my-2' src={Siemens} alt='Siemens'></img>
                <img className='my-2' src={Diamond} alt='Diamond'></img>
            </div>
        </section>
    )
}

export default Support;