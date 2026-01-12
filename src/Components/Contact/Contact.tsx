import './contact.css'
import { Mail, Github, Linkedin } from 'lucide-react'

function Contact() {
    
    return (
        <>
            <section className='section background'>
                <div className='container contact-container'>  
                    <h2 className='subtitle-2'>GET IN TOUCH</h2>
                    <p className='cv-desctipt'>I'm currently open to junior frontend developer opportunities. Feel free to reach out if you'd like to connect or discuss potential collaborations.</p>
                    <div className='links'>
                        <a href="mailto:solokalandadze@gmail.com" className='link-container'>
                           <div className='lk-box'>
                                {<Mail size={20} className='icon'/>} 
                            </div> 
                                solokalandadze@gmail.com
                            </a>
                        <a href='https://github.com/SolomonKa' className='link-container'>
                           <div className='lk-box'>
                                {<Github size={20} className='icon'/>} 
                            </div> 
                                https://github.com/SolomonKa
                            </a>    
                        <a href='linkedin.com' className='link-container'>
                           <div className='lk-box'>
                                {<Linkedin size={20} className='icon'/>} 
                            </div> 
                                https://linkedin.com/Solokl
                            </a>   
                    </div>

                </div>
            </section>        
        </>
    )
}

export default Contact