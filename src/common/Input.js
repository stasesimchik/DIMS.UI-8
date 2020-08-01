import React from 'react';

function Input({name,value,onChange,fieldState,type,placeholder,label}) {
    return(
        <div className='form__block'>
            <label>{label}</label>
            <input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} ></input>
            {fieldState}
        </div>

    )
}

export default Input