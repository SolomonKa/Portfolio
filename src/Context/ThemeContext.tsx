import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = 'light' | 'dark'

type ThemeContextValue = {
    theme: Theme,
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = 'theme'

export function ThemeProvider({children}: {children: ReactNode}) {
    const [theme, setTheme] = useState<Theme>('light')
    
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY)
        setTheme(stored === 'light' || stored === 'dark' ? stored : 'light')
    },[])

    function toggleTheme() {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    useEffect(() => {
        document.body.dataset.mode = theme
        localStorage.setItem(STORAGE_KEY, theme)
    }, [theme])

    return (
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                {children}
            </ThemeContext.Provider >
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    
    if(!context) {
        throw new Error('useTheme must be used within ThemeProvider')
    }
    
    return context
}

