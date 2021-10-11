import React, { useState, useEffect } from "react"


let temp

if (typeof window !== "undefined") {
  if (localStorage.getItem("dark") === null) {
    localStorage.setItem("dark", "false")
  } else {
    temp = JSON.parse(localStorage.getItem("dark"))
  }
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(temp)

  const changeTheme = () => {
    const newState = JSON.stringify(!darkMode)
    localStorage.setItem("dark", newState)
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    localStorage.setItem("dark" , JSON.stringify(darkMode))
    console.log("use effect fired")
  }, [darkMode])
  
  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, changeTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }

// export default ThemeProvider
