import React, { useState, useEffect } from 'react'
import './index.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main />
    </div>
  )
}

export default App