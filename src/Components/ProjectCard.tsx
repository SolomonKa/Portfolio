import '../Style/ProjectCard.style.css'

function ProjectCard() {

    return (
        <div className="card">
            <div className="card-content">
                <h1 className="card-title">Cinemood</h1>
                <p className="card-body">
                    Une application qui aide à choisir un film selon l’humeur, avec
					des options de filtrage pour affiner la sélection.
                 </p>
                 <div className="techno-used">
					<span className="tech-pj-box">React</span>
					<span className="tech-pj-box">CSS / Responsive</span>
					<span className="tech-pj-box">API</span>
				</div>
                <div className="card-buttons">
							<a
								href="https://cinemood-ebon.vercel.app"
								target="_blank"
								rel="noopener noreferrer"
								// className="btn-primary pj-btn-pry"
                                className='card-button'
							>
								Live Demo
							</a>
							<a
								href="https://github.com/SolomonKa/Cinemood"
								target="_blank"
								rel="noopener noreferrer"
								// className="btn-outline pj-btn-sec"
                                className='card-button2'
                                
							>
								Source Code
							</a>
						</div>
            </div>
        </div>
    )
}

export default ProjectCard