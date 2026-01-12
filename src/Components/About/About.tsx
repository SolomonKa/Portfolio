import './About.css'
import { Github, Linkedin, FileText } from 'lucide-react';

function About() {

    return (
        <>
            <section className='section background ab-top'>
               <div className='container about-container'>
                    <div className='about'>
                    <p className='text-primary p1'>Hello, I am</p>
                    <h1 className='title'>Solomon Kalandadze</h1>
                    <h2 className='text-secondary secondary-title'>Junior Fullstuck / React Developer</h2>
                    <p className='text-secondary p1'>Passionate about building clean, accessible, and performant web applications. Currently focused on React ecosystem and modern frontend practices.</p>
                    <div className='links-container'>
                        <a href='../../../public/cv/CV_Solomon-KALANDADZE.pdf' target='_blank' rel="noopener noreferrer" className="btn-primary btn-width-match"><FileText />CV</a>
                        <a href="github" className="btn-outline btn-width-match"><Github /> Github</a>
                        <a href="linkedin" className="btn-outline btn-width-match"><Linkedin /> Linkedin</a>
                    </div>
                </div>
               </div>
            </section>
                
        </>
    )
}

export default About