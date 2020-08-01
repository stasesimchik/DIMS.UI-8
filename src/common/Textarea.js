import React from 'react';

function Textarea({name,value,onChange,fieldState,placeholder,label}) {
    return(
        <div className='form__block'>
            <label>{label}</label>
            <textarea rows='5' name={name} value={value} onChange={onChange} placeholder={placeholder} ></textarea>
            {fieldState}
        </div>

    )
}

export default Textarea