import React from 'react';
import styles from './Location.module.scss';
import { useNavigate } from 'react-router';

const Location = ({ setStartNum, name, id, startNum }) => {
    const navigate = useNavigate()

    const onClickLocation = (num) => {
        setStartNum(num)
        navigate('/')
    }

    return (
        <div
            key={id}
            onClick={() => onClickLocation(startNum)}
            className={styles.location}
        >
            <p>{name}</p>
            <span>{startNum}</span>
        </div>
    )
}

export default Location