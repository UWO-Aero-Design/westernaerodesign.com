import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Gallery from "./Gallery";
import Team from './Team'
import { MechanicalMembers, ControlsMembers } from './Members'
import Contact from './Contact'
import Support from './Support'

import { useWindowSize } from "@uidotdev/usehooks";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
	const MD = 768;
	const LG = 1024;

	const size = useWindowSize();

	const getFinalFactor = () => {
		if (size.width) {
			if (size.width <= MD) {
				return (15.4);
			} else if (size.width <= LG) {
				return (8.4);
			} else {
				return (5.9);
			}
		}
	}

	return (
		<div className='scroll-smooth scrollbar-hide'>
			<Navbar />
			<Parallax pages={2 + getFinalFactor()}>
				<Home />
				<About />
				<ParallaxLayer offset={2}>
					<Team MechanicalMembers={MechanicalMembers} ControlsMembers={ControlsMembers} />
					<Gallery />
					<Support />
					<Contact />
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}

export default App;
