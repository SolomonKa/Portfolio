import "./App.css";
import "./Style/About.style.css";
import "./Style/Navbar.style.css";
import "./Style/Skills.style.css";
import "./Style/Project.style.css";
import "./Style/Resume.style.css";
import "./Style/Contact.style.css";
import "./Style/Footer.style.css";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";

function App() {
	return (
		<>
			<Navbar />
			<main>
				<section id="about">
					<About />
				</section>
				<section id="skills">
					<Skills />
				</section>
				<section id="projects">
					<Project />
				</section>
				<section id="cv">
					<Resume />
				</section>
				<section id="contact">
					<Contact />
				</section>
			</main>
			<Footer />
		</>
	);
}

export default App;
