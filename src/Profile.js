

const Profile = ({ Image, Name, Title, Year }) => {
    return (
        <div className="w-full h-full border py-10 border-2 rounded-3xl hover:bg-stone-200 duration-150 hover:-translate-y-1 hover:scale-110 hover:shadow-xl shadow-stone-500/50">
            <div className="rounded-full w-36 h-36 mx-auto overflow-hidden bg-top">
                <img className="overflow-hidden rounded-4xl bg-top" src={Image} alt={Name}></img>
            </div>
            <figcaption className="pt-4 text-center text-gray-800 italic text-sm">
                {Name}<br/>
                <span>
                {Title}<br/>
                {Year}
                </span>
            </figcaption>
        </div>
    )
}

export default Profile;