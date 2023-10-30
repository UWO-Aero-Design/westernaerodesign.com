import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Gallery from "./Gallery";
import Team from './Team'
import { MechanicalMembers, ControlsMembers } from './Members'
import Contact from './Contact'
import Support from './Support'

function App() {

	return (
		<div className='scroll-smooth scrollbar-hide'>
			<Navbar />
				<Home />
				<About />
					<Team MechanicalMembers={MechanicalMembers} ControlsMembers={ControlsMembers} />
					<Gallery />
					<Support />
					<Contact />
		</div>
	);
}

export default App;
