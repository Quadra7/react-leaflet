import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Cookies } from 'react-cookie';
import LoginForm from '../LoginForm';

export default function LoginPage() {
    const navigateTo = useNavigate();

    const cookies = new Cookies();

    useEffect(() => {
        const email = cookies.get('email');
        const password = cookies.get('password');

        if (email && password) navigateTo('/app');
    });

    return <LoginForm />;
}
