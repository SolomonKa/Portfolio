import { useState, useEffect } from "react";

export function useScreenSize() {
	const [screenSize, setScreenSize] = useState({
		isMobile: window.innerWidth < 768,
	});

	useEffect(() => {
		let timeputId: ReturnType<typeof setTimeout> | undefined;

		const handleResize = () => {
			clearTimeout(timeputId);

			timeputId = setTimeout(() => {
				setScreenSize({
					isMobile: window.innerWidth < 768,
				});
			}, 150);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			clearTimeout(timeputId);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return screenSize;
}
