import React, {useState} from 'react';


export const AppContext = React.createContext()

function AppProvider({children}) {
    const [showNav, setShowNav] = useState(true)
    const [showUserManege, setShowUserManege] = useState(true)
    const [showBradio, setShowBradio] = useState(false)
    const [showWeather, setShowWeather] = useState(false)
    const [showIot, setShowIot] = useState(false)
    const [isAddUser, setIsAddUser] = useState(false)
    const [isUserInfomation, setIsUserInfomation] = useState(false)
    const [isUserAction, setIsUserAction] = useState(false)
    const [isLogout, setIsLogout] = useState(false)
    return (
        <AppContext.Provider value={{
            showNav, setShowNav, showUserManege, showBradio, showIot, showWeather,
            setShowBradio, setShowUserManege, setShowIot, setShowWeather, isAddUser,
            setIsAddUser, setIsUserInfomation, isUserInfomation, isUserAction,
            setIsUserAction, isLogout, setIsLogout
        }}>
            {children}
        </AppContext.Provider>
    );

}

export default AppProvider;