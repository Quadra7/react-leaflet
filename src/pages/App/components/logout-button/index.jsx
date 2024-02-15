import { useNavigate } from "react-router-dom";

import { Cookies } from "react-cookie";

import './index.css';

export default function LogoutButton() {
    const navigateTo = useNavigate();
    
    const cookies = new Cookies();

    const Logout = () => {
        cookies.remove('email');
        cookies.remove('password');

        navigateTo('/');
    };

    return (
        <button className="logout-button" onClick={Logout}>Logout</button>
    );
}
