import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Team from './Team'
import {MechanicalMembers, ControlsMembers} from './Members'
import Contact from './Contact'
import Support from './Support'

import Parallax from './Parallax'

function App() {
	return (
		<div className='scroll-smooth'>
			<Navbar />
			<Home />
			<About />
			<Team MechanicalMembers={MechanicalMembers} ControlsMembers={ControlsMembers}/>
			<Parallax Image='bg-team' />
			<Support />
			<Contact />
		</div>
	);
}

export default App;
