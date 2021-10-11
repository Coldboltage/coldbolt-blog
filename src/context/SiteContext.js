import React, { useState, useEffect } from "react"


const AppContext = React.createContext({
  defaultState: true,
})

let temp

if (typeof window !== "undefined") {
  if (localStorage.getItem("dark") === null) {
    localStorage.setItem("dark", "false")
  } else {
    temp = JSON.parse(localStorage.getItem("dark"))
  }
}


const AppProvider = ({ children }) => {
  const [, forceUpdate] = React.useState(0);
  const [darkMode, setDarkMode] = useState(temp)

  const changeTheme = () => {
    const newState = JSON.stringify(!darkMode)
    localStorage.setItem("dark", newState)
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    setDarkMode(temp)
  } , [])
  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, changeTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }

// export default ThemeProvider
