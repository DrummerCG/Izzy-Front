import { useState, useEffect } from "react";
import LoginModal from "./LoginModal";

const UserOptions = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (token) {
            try {
                const user = JSON.parse(atob(token.split('.')[1]));
                setUserName(user.name || "Usuario");
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
                <label onClick={() => setIsLoggedIn(false)}>
                    {userName} (Cerrar Sesión)
                </label>
            </div>
        );
    }
};

export default UserOptions;