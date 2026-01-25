import data from "../Skills-data";

const frontend = data.find((e) => e.category === "Frontend");
const backend = data.find((e) => e.category === "Backend");
const learning = data.find((e) => e.category === "Learning");
const devTools = data.find((e) => e.category === "Dev Tools");

function Skills() {
	return (
		<section className="section background-2">
			<div className="container skills-container h-mj">
				<h2 className="subtitle">Compétences & Technologies</h2>
				<div className="grid-container">
					<div className="skill-box">
						<h2 className="text-secondary">Frontend</h2>
						<div className="flex-skl">
							{frontend?.technologies.map((tech) => (
								<span className="tech-box" key={tech}>
									{tech}
								</span>
							))}
						</div>
					</div>
					<div className="skill-box">
						<h2 className="text-secondary">Backend</h2>
						<div className="flex-skl">
							{backend?.technologies.map((tech) => (
								<span className="tech-box" key={tech}>
									{tech}
								</span>
							))}
						</div>
					</div>
					<div className="skill-box">
						<h2 className="text-secondary">Utils</h2>
						<div className="flex-skl">
							{devTools?.technologies.map((tech) => (
								<span className="tech-box" key={tech}>
									{tech}
								</span>
							))}
						</div>
					</div>
					<div className="skill-box">
						<h2 className="text-secondary">Apprentissage Continu</h2>
						<div className="flex-skl">
							{learning?.technologies.map((tech) => (
								<span className="tech-box" key={tech}>
									{tech}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
