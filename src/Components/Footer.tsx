const navItems = [
	{ label: "About", href: "#about" },
	{ label: "Projects", href: "#projects" },
	{ label: "CV", href: "#cv" },
];

function Footer() {
	return (
		<footer className="section foot-section background-2">
			<div className="container footer-container">
				<div>
					<p className="cv-desctipt" id="footer-l-text">
						© 2026 Solomon Kalandadze. Built with React & CSS
					</p>
				</div>
				<div className="footer-links">
					{navItems.map((item) => (
						<a className="nav-link" href={item.href} key={item.href}>
							{item.label}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}

export default Footer;
