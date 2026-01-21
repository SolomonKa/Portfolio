import './Navbar.css'
import { useState, useEffect} from 'react'
import { useTheme } from '../../../Context/ThemeContext'
import { Moon, Sun } from 'lucide-react'

type Scroll = boolean

const navItems = [
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'CV', href: '#cv' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
    const {theme, toggleTheme} = useTheme()
    const [isScrolled, setIsScrolled] = useState<Scroll>(false)

    const modeIcon = theme === 'light' ? <Moon size={18}/> : <Sun size={18}/>

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)

            window.setTimeout(() => {
                setIsScrolled(false)
            }, 2000) 
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return  (
        <>
            <nav className={`nav-container ${isScrolled ? 'navbar-scrolled' : ''} `}>
                <div className='container navbar '>            
                    <h3 className='logo'>SK</h3>
                    <div className='nav-right'>
                        <ul>
                            {
                                navItems.map(item => 
                                        <a className='nav-link' href={item.href} key={item.href}>{item.label}</a>
                                )
                            }
                        </ul>
                        <button type='button' className='theme-mode-btn' onClick={toggleTheme}>{modeIcon}</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar