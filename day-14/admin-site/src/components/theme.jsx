import React, { useState } from 'react'
import { createContext } from 'react'

const theme = () => {
    const [darkMode, setDarkMode] = useState(true)

    function toggleTheme(){
        setDarkMode(prevDarkMode => !prevDarkMode)
    }
  return (
    <div></div>
  )
}

export default theme