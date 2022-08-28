import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Team from './Team'
import Members from './Members'
import Contact from './Contact'
import Support from './Support'

import Parallax from './Parallax'

function App() {
	return (
		<div className='scroll-smooth'>
			<Navbar />
			<Home />
			<About />
			<Team Members={Members}/>
			<Parallax Image='bg-team' />
			<Support />
			<Contact />
		</div>
	);
}

export default App;
