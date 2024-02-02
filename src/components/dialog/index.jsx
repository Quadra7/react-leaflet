import './style.css';

import DatePickerComponent from '../date-picker';

export default function Dialog({layers, currLayer, changeLayer, overlays, currOverlay, changeOverlay}) {
    return(
        <div className='dialog'>
            <div className='buttons-block'>
                <button className='dialog-button bigger'>Отчёт в PDF</button>
                <button className='dialog-button bigger'>Отчёт в SHP</button>
            </div>
        
            <div className='block'>
                <p className="title">Варианты подстилающей карты</p>
                <div className='layers'>
                    {
                        Object.keys(layers).map((key) => {
                            const isChecked = currLayer === key ? true : false;
                            return (
                                <div key={key}>
                                    <input 
                                        id={key}
                                        type='radio'
                                        value={key}
                                        name='layers'
                                        defaultChecked={isChecked}
                                        onChange={() => changeLayer(key)}
                                    />
                                    <label htmlFor={key}>{key}</label>
                                </div>
                            )
                        })
                    }
                </div>

                <p className='title'>Отображение дополнительных данных</p>
                <div className='overlays'>
                    {
                        Object.keys(overlays).map((key) => {
                            return (
                                <div className='overlay' key={key}>
                                    <label>
                                        {overlays[key]}
                                        <input 
                                            id={key}
                                            type='checkbox'
                                            value={key}
                                            name='overlays'
                                            checked={currOverlay[key] ? 'checked' : ''}
                                            onChange={() => changeOverlay(key)}
                                        />
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='block'>
                <p className='title non-underlined'>Сортировать данные за:
                    <button className='dialog-button smaller'>Сегодня</button>
                    <button className='dialog-button smaller'>24 часа</button>
                    <button className='dialog-button smaller'>Неделя</button>
                </p>
            </div>

            <div className='block'>
                <p className='title non-underlined'>
                    Сбор данных за несколько дней (не более 7 дней):
                </p>

                <p>
                    Укажите начальный и конечный день:
                </p>

                <DatePickerComponent />
                <div className='buttons-block'>
                    <button className='dialog-button longer'>Сохранить</button>
                    <button className='dialog-button longer'>Сбросить</button>
                </div>
            </div>
            
        </div>
    )
}