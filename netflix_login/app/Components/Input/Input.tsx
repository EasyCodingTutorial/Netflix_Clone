import React from 'react'

import styles from './Input.module.css'

interface InputProps {
    id: string,
    type?: string,
    value: string,
    label: string,
    onchange?: any,
}


const Input: React.FC<InputProps> = ({ id, type, value, label, onchange }) => {
    return (
        <>
            <div className={styles.InputParent}>
                <input type={type} id={id} placeholder=' ' value={value} onChange={onchange} className={styles.InputBox} />
                <label htmlFor={id} className={styles.Inputlabel}>{label}</label>
            </div>
        </>
    )
}

export default Input