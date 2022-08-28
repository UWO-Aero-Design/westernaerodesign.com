

const Profile = ({ Image, Name, Title, Year }) => {
    return (
        <div>
            <img className="w-32 mx-auto my-1" src={Image} alt={Name}></img>
            <figcaption className="text-center text-gray-800 italic text-sm">
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