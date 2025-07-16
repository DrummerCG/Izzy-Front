import { useState, useEffect } from "react";
import LoginModal from "./LoginModal";

const UserOptions = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [userName, setUserName] = useState(null);

    const HandleLogout = () => {
        setIsLoggedIn(false); 
        setUserName(null);
        localStorage.setItem('username', null);
        window.location.reload();
    }

    useEffect(() => {
        const username = localStorage.getItem("username");
        if (username !== null && username !== "null" && username !== undefined) {
            try {
                setUserName(username);
                setIsLoggedIn(true);
            } catch (e) {
                setIsLoggedIn(false);
            }
        }
    }, []);

    if (!isLoggedIn) {
        return (
            <div>
                <LoginModal show={showLoginModal} onHide={() => setShowLoginModal(false)} />
                <label className='link' onClick={() => setShowLoginModal(true)}>Iniciar Sesión</label>
            </div>
        );
    } else {
        return (
            <div>
                <label onClick={HandleLogout}>
                    {userName} (Cerrar Sesión)
                </label>
            </div>
        );
    }
};

export default UserOptions;