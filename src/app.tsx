import { ReactNode } from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import './app.css'

const App = ({ children }: { children?: ReactNode }) => {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  )
}

export default App
