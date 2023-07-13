import Profile from './Profile'

const Team = ({MechanicalMembers, ControlsMembers}) => {
    return (
        <section id="team" className='my-16 md:mx-28 mx-12 mx-auto scroll-m-20'>
            <h1 className='text-center pb-5 mb-10 border-b-2 font-bold text-4xl'>Our Team</h1>
            <h2 className='font-semibold text-center my-6 text-2xl'>Mechanical</h2> 
            <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {MechanicalMembers.map((item,index) => {
                    return <Profile key={index} Image={item.image} Name={item.name} Title={item.title} Year={item.year}/>
                })}
            </div>
            <h2 className='font-medium text-center my-6 text-2xl '>Controls</h2> 
            <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {ControlsMembers.map((item,index) => {
                    return <Profile key={index} Image={item.image} Name={item.name} Title={item.title} Year={item.year}/>
                })}
            </div>
        </section>
    )
}

export default Team;