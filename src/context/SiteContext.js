import React, {useState} from 'react'

const AppContext = React.createContext({
    defaultState: true,
})

const AppProvider  = ({children}) => {
    const [defaultState, setDefaultState] = useState(true)
    const changeTheme = () => setDefaultState(!defaultState)

    return (
        <AppContext.Provider value={{defaultState, setDefaultState, changeTheme}}>
            {children}
        </AppContext.Provider >
    )
}

export {AppContext, AppProvider}



// export default ThemeProvider



