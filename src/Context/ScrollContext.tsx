import { createContext, useContext, useState, useEffect, type ReactNode, useRef } from "react";

type Scroll = boolean;

const scrollContext = createContext<Scroll | undefined>(undefined)

export function ScrollProider({children}: {Children: ReactNode}) {
    const [isScrolled, setIsScrolled] = useState(false)
     const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = window.setTimeout(() => {
                setIsScrolled(false);
            }, 1000);
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
            <scrollContext.Provider value={isScrolled} >
                {children}
            </scrollContext.Provider>
    )
}

export function scrollTheme() {
    const cntx = useContext(scrollContext);

    if (!cntx) {
        throw new Error('scrollTheme should be used within ScrollProvider')
    }

    return cntx
}