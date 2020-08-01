import React from 'react';

function Select({name,value,onChange,fieldState,type,placeholder,label}) {
    return(
        <div>
            <label>{label}</label>
            <select name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} >
                <option></option>
                <option>Java</option>
                <option>JavaScript</option>
                <option>.Net</option>
                <option>Salesforce</option>
            </select>
            {fieldState}
        </div>

    )
}

export default Select