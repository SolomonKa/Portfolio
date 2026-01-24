"use client";

import type React from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Mode = "light" | "dark";

type ThemeCtx = {
	mode: Mode;
	setMode: (m: Mode) => void;
	toggleMode: () => void;
};

const ThemeContext = createContext<ThemeCtx | null>(null);

const STORAGE_KEY = "room59.mode";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [mode, setModeState] = useState<Mode>("light");

	useEffect(() => {
		const saved = (localStorage.getItem(STORAGE_KEY) as Mode | null) ?? "light";
		setModeState(saved === "dark" ? "dark" : "light");
	}, []);

	useEffect(() => {
		document.documentElement.setAttribute("data-mode", mode);
		localStorage.setItem(STORAGE_KEY, mode);
	}, [mode]);

	const value = useMemo<ThemeCtx>(() => {
		const setMode = (m: Mode) => setModeState(m);
		const toggleMode = () =>
			setModeState((p) => (p === "light" ? "dark" : "light"));
		return { mode, setMode, toggleMode };
	}, [mode]);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
}

export function useTheme() {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
	return ctx;
}
