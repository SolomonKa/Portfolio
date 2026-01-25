import { Moon, Sun } from "lucide-react";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import { useTheme } from "../Context/ThemeContext";
import { useScreenSize } from '../Hooks/useScreenSize'

type Scroll = boolean;

const navItems = [
	{ label: "À propos", href: "#about" },
	{ label: "Compétences", href: "#skills" },
	{ label: "Projets", href: "#projects" },
	{ label: "CV", href: "#cv" },
	{ label: "Contact", href: "#contact" },
];

function Navbar() {
	const { theme, toggleTheme } = useTheme();
	const {isMobile} = useScreenSize()
	const [isScrolled, setIsScrolled] = useState<Scroll>(false);
	const [open, setOpen] = useState(false);

	console.log(isMobile)

	const modeIcon = theme === "light" ? <Moon size={24} /> : <Sun size={24} />;

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);

			window.setTimeout(() => {
				setIsScrolled(false);
			}, 2000);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleClick = () => {
		setOpen(false)
	} 

	

	return (
		<nav className={`nav-container ${isScrolled ? "navbar-scrolled" : ""} `}>
			<div className="container navbar ">
				{isMobile ? (
						<button
							type="button"
							className="theme-mode-btn"
							onClick={toggleTheme}
							>
							{modeIcon}
						</button>
					) : (
						<h3 className="logo ">SK</h3> 

					)
				}
				{
					isMobile ? (
						<div>
							<div className="hamburger-wrapper">
								<Hamburger size={24} toggled={open} toggle={setOpen} /> 
							</div>
							<ul className={`offscreen-menue ${open ? 'active' : ""}`}>
							{navItems.map((item) => (
									<a className="burger-nav-link" href={item.href} key={item.href} onClick={handleClick}>
										{item.label}
									</a>
							))}
							</ul>
						</div>
					) : (
						<>
							<div className="nav-right">
								<ul>
									{navItems.map((item) => (
										<a className="nav-link" href={item.href} key={item.href}>
											{item.label}
										</a>
									))}
								</ul>
			
								<button
									type="button"
									className="theme-mode-btn"
									onClick={toggleTheme}
									>
									{modeIcon}
								</button>
							</div>
						</>
					)	    
				}

			</div>
		</nav>
	);
}

export default Navbar;
