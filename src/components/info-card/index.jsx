import './index.css';

export default function InfoCard() {
    return (
        <div className='info-block'>
            <p>
                Адрес: 630099, Россия, г.Новосибирск ул.Советская 30
            </p>
            <p>
                Телефон: +7 383 363-46-05
            </p>
            <p>
                E-mail: kav@racpod.siberia.net
            </p>
            <a className='our-site' href='https://rcpod.ru/'>Наш сайт</a>
        </div>
    );
}
