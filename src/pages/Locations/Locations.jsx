import React from 'react';
import ArrowLeft from '../../assets/ArrowLeft.svg';
import styles from './Locations.module.scss';
import { LocationsList } from '../../Locations';
import { useNavigate } from 'react-router';
import Location from '../../components/Location/Location';

const Locations = ({ setStartNum }) => {
    const navigate = useNavigate()

    return (
        <div className={styles['locations-page']}>
            <button onClick={() => navigate('/')} className={styles['locations-page__btn']}>
                <img src={ArrowLeft} alt='arrow' />
            </button>
            <h1>
                Выберите страну/регион
            </h1>
            <div className={styles['locations-page__list']}>
                {
                    LocationsList.map(obj => {
                        return (
                            <div key={obj.id} className={styles['locations-category']}>
                                <h2>{obj.firstLetter}</h2>
                                {
                                    obj.locations.map(obj => {
                                        return <Location setStartNum={setStartNum} {...obj} />
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Locations