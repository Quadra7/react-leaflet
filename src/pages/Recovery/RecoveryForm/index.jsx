import { useState } from 'react';

import { Link } from 'react-router-dom';

import background from '../../../assets/pictures/background.png';

export default function RecoveryForm() {
    const [email, setEmail] = useState('');

    const Recovery = () => {
        const rgx = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
        
        alert(rgx.test(email) ? 'We sent message to your email.' : 'Bad Email!');
    };

    const onEmailChange = (e) => {
        setEmail(e.currentTarget.value);
    };

    return (
        <>
            <img className='background' src={background} alt='backround' />

            <div className='login-form'>
                <h2 className='auth-title center'>Восстановление пароля</h2>

                <div className='input-block'>
                    <label className='legend'>Email</label>
                    <input type="text" value={email} onChange={onEmailChange} maxLength={50} />
                </div>

                <button className='button-login' onClick={Recovery}>Восстановить доступ</button>

                <Link className='link center' to='/login'>Авторизация</Link>
            </div>
        </>
    );
}
