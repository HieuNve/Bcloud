import React, {useState} from 'react';


export const AppContext = React.createContext()

function AppProvider({children}) {
    const [showNav, setShowNav] = useState(true)
    return (
        <AppContext.Provider value={{
            showNav, setShowNav
        }}>
            {children}
        </AppContext.Provider>
    );

}

export default AppProvider;