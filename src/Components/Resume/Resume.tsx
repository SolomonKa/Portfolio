import './Resume.css' 
import { FileUser, Download } from 'lucide-react';


function Resume() {
    

    return (
        <>
            <section className='section background-2'>
                <div className='container resume-container'>
                    <h3 className='subtitle'>RESUME</h3>
                    <div className='res-flex'>
                        <div className='cv-icon-cont'>
                            <FileUser className='cv-img'/>
                        </div>
                        <div className='cv-description'>
                            <h3 className='subtitle-2'>Download My CV</h3>
                            <p className='cv-desctipt'>Get a detailed overview of my experience, education, and technical skills in a professionally formatted PDF document.</p>
                        </div>
                    </div>
                    <a href='../../../public/cv/CV_Solomon-KALANDADZE.pdf' download='Solomon-KALANDADZE_CV' rel="noopener noreferrer" className='btn-primary cv-btn-top' style={{border:'none'}}>{<Download />}Download CV (PDF)</a>
                </div>

            </section>
        </>
    )
}

export default Resume