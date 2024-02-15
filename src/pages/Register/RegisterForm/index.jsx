import { Link } from 'react-router-dom';
import InfoCard from '../../../components/info-card';

import background from '../../../assets/pictures/background.png';

export default function RegisterForm() {

    return (
        <>
            <img className='background' src={background} alt='backround' />

            <div className='login-form'>
                <h1 className='auth-title center'>Регистрация</h1>

                <div className='input-block'>
                    <label className='legend'>Имя</label>
                    <input type="text" />

                    <label className='legend'>Фамилия</label>
                    <input type="text" />

                    <label className='legend'>Отчество</label>
                    <input type="text" />

                    <label className='legend'>Название организации</label>
                    <input type="text" />

                    <label className='legend'>Email</label>
                    <input type="text" />

                    <label className='legend'>
                        Прикрепите документ,<br/>
                        Удостоверяющий личность
                    </label>
                    <input type='file' />
                </div>

                <button className='button-login' onClick={() => alert('action')}>Зарегистрироваться</button>

                <div className='help-block'>
                    <div>
                        <span>Уже есть аккаунт?</span>
                        <Link className='link' to='/login'>Авторизоваться</Link>
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