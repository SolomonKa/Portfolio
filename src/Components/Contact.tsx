import { Github, Linkedin, Mail } from "lucide-react";

function Contact() {
	return (
		<section className="section background">
			<div className="container contact-container">
				<h2 className="subtitle">Contacte</h2>
				<p className="cv-desctipt">
					Je suis actuellement à la recherche d’opportunités en alternance.
					N’hésitez pas à me contacter pour échanger ou discuter de
					collaborations potentielles.
				</p>
				<div className="links">
					<a href="mailto:solokalandadze@gmail.com" className="link-container">
						<div className="lk-box">{<Mail size={20} className="icon" />}</div>
						solokalandadze@gmail.com
					</a>
					<a href="https://github.com/SolomonKa" className="link-container">
						<div className="lk-box">
							{<Github size={20} className="icon" />}
						</div>
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/solomon-kalandadze-95899092/"
						target="blank"
						className="link-container"
					>
						<div className="lk-box">
							{<Linkedin size={20} className="icon" />}
						</div>
						Linkedin
					</a>
				</div>
			</div>
		</section>
	);
}

export default Contact;
