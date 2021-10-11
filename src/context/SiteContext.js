import React, { useState } from "react"

const AppContext = React.createContext({
  defaultState: true,
})

let temp;

if (localStorage.getItem("dark") === null) {
  localStorage.setItem("dark", "false")
} else {
  temp = JSON.parse(localStorage.getItem("dark"))
}

console.log(temp)

const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(temp)
  const changeTheme = () => {
    const newState = JSON.stringify(!darkMode)
    localStorage.setItem("dark", newState)
    setDarkMode(!darkMode)
  }

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, changeTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }

// export default ThemeProvider
