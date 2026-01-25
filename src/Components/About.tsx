import { FileText, Github, Linkedin } from "lucide-react";

function About() {
	return (
		<section className="section background ab-top">
			<div className="container about-container">
				<div className="about">
					<p className="text-primary p1">Bonjour, je suis</p>
					<h1 className="title-a">Solomon Kalandadze</h1>
					<h2 className="text-secondary secondary-title">
						Développeur Fullstack Junior
					</h2>
					<p className="text-secondary p1">
						Passionné par la création et les technologies modernes, je développe
						des solutions fullstack. Actuellement concentré sur les écosystèmes
						React et Express
					</p>
					<div className="links-container">
						<a
							href="../../../public/cv/CV_Solomon-KALANDADZE.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-primary btn-width-match"
						>
							<FileText />
							CV
						</a>
						<a
							href="https://github.com/SolomonKa"
							className="btn-outline btn-width-match"
						>
							<Github /> Github
						</a>
						<a
							href="https://www.linkedin.com/in/solomon-kalandadze-95899092/"
							target="_blank"
							rel="noopener"
							className="btn-outline btn-width-match"
						>
							<Linkedin /> Linkedin
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
