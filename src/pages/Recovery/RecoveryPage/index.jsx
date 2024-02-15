import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Cookies } from 'react-cookie';
import RecoveryForm from '../RecoveryForm';

export default function RecoveryPage() {
    const navigateTo = useNavigate();

    const cookies = new Cookies();

    useEffect(() => {
        const email = cookies.get('email');
        const password = cookies.get('password');

        if (email && password) navigateTo('/app');
    });

    return <RecoveryForm />;
}
