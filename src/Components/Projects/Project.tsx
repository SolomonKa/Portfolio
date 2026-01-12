import './Project.css'

function Project() {

    return (
        <>
            <section className='section background'>
                <div className='container projects-container'>
                    <h2 className='subtitle' id='pg-subtitle'>FEATURED PROJECTS</h2>
                     <div className='project-grid'>
                        <div className='pj-content'>
                            <h3 className='pg-title'>Cinemood</h3>
                            <p className='pj-desctipt'>Une application qui aide à choisir un film selon l’humeur, avec des options de filtrage pour affiner la sélection.</p>
                            <div> 
                                <span className='tech-pj-box'>React</span>
                                <span className='tech-pj-box'>CSS / Responsive</span>
                                <span className='tech-pj-box'>API</span>
                            </div>
                            <div>
                                <a href="https://cinemood-ebon.vercel.app" target='_blank' rel="noopener noreferrer" className="btn-primary pj-btn-pry">Live Demo</a>
                                <a href="https://github.com/SolomonKa/Cinemood" target='_blank' rel="noopener noreferrer" className="btn-outline pj-btn-sec">Source Code</a>
                            </div>
                        </div>
                        
                    </div>  
                </div>
                
            </section>
            
        </>
    )
}

export default Project