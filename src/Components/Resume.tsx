import { Download, FileUser } from "lucide-react";

function Resume() {
	return (
		<section className="section background-2">
			<div className="container resume-container">
				<h3 className="subtitle">Curriculum Vitae</h3>
				<div className="res-flex">
					<div className="cv-icon-cont">
						<FileUser className="cv-img" />
					</div>
					<div className="cv-description">
						<h3 className="subtitle-2">Télécharger mon CV</h3>
						<p className="cv-desctipt">
							Obtenez un aperçu détaillé de mon expérience, formation et
							compétences techniques dans un document PDF professionnel.
						</p>
					</div>
				</div>
				<a
					href="/public/CV_KALANDADZE-Solomon.pdf"
					download="Solomon-KALANDADZE_CV"
					rel="noopener noreferrer"
					className="btn-primary cv-btn-top"
					style={{ border: "none" }}
				>
					{<Download />}Télécharger le CV (PDF)
				</a>
			</div>
		</section>
	);
}

export default Resume;
