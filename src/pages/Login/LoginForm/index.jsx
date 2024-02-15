import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Cookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import InfoCard from '../../../components/info-card';

import background from '../../../assets/pictures/background.png';

export default function LoginForm() {
    const navigateTo = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const cookies = new Cookies();

    const Login = () => {
        const rgx = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
        
        if (rgx.test(form.email)) {
            cookies.set('email', form.email);
            cookies.set('password', form.password);
            
            navigateTo('/app');
        }
        else {
            alert('bad email!');
        }
    };

    const onEmailChange = (e) => {
        const newEmail = e.currentTarget.value;

        setForm((prev) => ({
            ...prev,
            email: newEmail
        }));
    };

    const onPasswordChange = (e) => {
        const newPassword = e.currentTarget.value;

        setForm((prev) => ({
            ...prev,
            password: newPassword
        }));
    };

    return (
        <>
            <img className='background' src={background} alt='backround' />

            <div className='login-form'>
                <h1 className='auth-title center'>Авторизация</h1>

                <div className='input-block'>
                    <input 
                        type="text" 
                        placeholder='Email' 
                        value={form.email}
                        onChange={onEmailChange}
                        maxLength={50}/>
                    <input 
                        type="password" 
                        placeholder='Пароль' 
                        value={form.password}
                        onChange={onPasswordChange}
                        maxLength={50}/>
                </div>

                <button
                    className='button-login'
                    onClick={Login}>Войти</button>

                <div className='help-block'>
                    <div>
                        <span>Нет аккаунта?</span>
                        <Link className='link' to='/register'>Зарегистрироваться</Link>
                    </div>
                    <div>
                        <span>Забыли пароль?</span>
                        <Link className='link' to='/recovery'>Восстановить доступ</Link>
                    </div>
                </div>
            </div>

            <InfoCard />
        </>
    );
}
