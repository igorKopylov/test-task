import React, { useState } from 'react';
import InputPhone from '../../components/InputPhone/InputPhone';
import styles from './Home.module.scss';

const Home = ({ startNum }) => {
    const [phoneNum, setPhoneNum] = useState('')

    const onSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className={styles['home-page']}>
            <div className={styles['home-page__content']}>
                <h1>Сброс пароля</h1>
                <p>На ваш номер придет код для входа</p>
                <form onSubmit={onSubmit}>
                    <InputPhone
                        startNum={startNum}
                        phoneNum={phoneNum}
                        setPhoneNum={setPhoneNum}
                    />
                    <button disabled={!phoneNum} type='submit'>
                        Отправить код
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Home