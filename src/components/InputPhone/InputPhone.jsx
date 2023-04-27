import React from 'react';
import styles from './InputPhone.module.scss';
import ArrowDown from '../../assets/ArrowDown.svg';
import { useNavigate } from 'react-router';

const InputPhone = ({ startNum, phoneNum, setPhoneNum, rest }) => {
  const navigate = useNavigate()

  function formatNumber(number) {
    const arr = number.toString().replace(/\D/g, "").split('');
    if (arr.length > 3) arr.splice(3, 0, ' ')
    if (arr.length > 7) arr.splice(7, 0, ' ')
    if (arr.length > 10) arr.splice(10, 0, ' ')
    return arr.join('');
  }


  return (
    <div className={styles['input-wrapper']}>
      <div onClick={() => navigate('/locations')} className={styles['input-wrapper__start-num']}>
        <span>{startNum}</span>
        <img
          src={ArrowDown}
          alt='arrow'
        />
      </div>
      <input
        placeholder='000 000 00 00'
        value={formatNumber(phoneNum)}
        onChange={e => setPhoneNum(e.target.value)}
        {...rest}
      />
    </div>
  )
}

export default InputPhone