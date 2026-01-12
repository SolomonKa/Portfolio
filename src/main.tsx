import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './Context/ThemeContext.tsx'
import { ScrollProider } from './Context/ScrollContext.tsx'

createRoot(document.getElementById('root')!).render(
    <ScrollProider >
        <ThemeProvider >
            <App />
        </ThemeProvider>    
    </ScrollProider>
)
