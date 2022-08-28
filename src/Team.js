import Profile from './Profile'

const Team = ({Members}) => {
    return (
        <section id="team" className='my-20 w-3/4 mx-auto scroll-m-20'>
            <h1 className='text-center my-5 font-bold text-xl'>Our Team</h1>
            <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {Members.map((item,index) => {
                    return <Profile key={index} Image={item.image} Name={item.name} Title={item.title} Year={item.year}/>
                })}
            </div>
        </section>
    )
}

export default Team;