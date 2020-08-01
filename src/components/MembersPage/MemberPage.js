import React from 'react';
import { firebaseMethods} from '../Firebase/Firebase'; 
import Input from '../../common/Input'
import Select from '../../common/Select'
import styles from './MemberPage.module.css'
import Validation from '../../helpers/validation'
import Button from '../../common/Button/Button';

class MemberPage extends React.Component {
        state = {
            name: {
                name: 'name',
                value: '',
                isValid: true,
            },
            lastName: {
                name: 'lastName',
                value: '',
                isValid: true,
            },
            email: {
                name: 'email',
                value: '',
                isValid: true,
            },
            phone: {
                name: 'phone',
                value: '',
                isValid: true,
            },
            education: {
                name: 'education',
                value: '',
                isValid: true,
            },
            direction: {
                name: 'direction',
                value: '',
                isValid: true,
            },
            start: {
                name: 'start',
                value: '',
                isValid: true,
            },
            age: {
                name: 'age',
                value: '',
                isValid: true,
            },
            skype: {
                name: 'skype',
                value: '',
                isValid: true,
            },
            address: {
                name: 'address',
                value: '',
                isValid: true,
            },
            math: {
                name: 'math',
                value: '',
                isValid: true,
            },
            university: {
                name: 'university',
                value: '',
                isValid: true,
            },
            userId: '',
        };
    
    validate = (val, regExp) => {
        return regExp.test(val)
    }

    onInputChange = ({target: {name,value}}) => {
        let valid = this.validate(value,Validation(name));
        this.setState({
                    [name]: {
                        value, 
                        isValid: valid,
                    }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {name, lastName, email, phone, direction, education, start, age, skype, address, math} = this.state
        if(name.isValid && lastName.isValid && skype.isValid && address.isValid && math.isValid && email.isValid && phone.isValid && direction.isValid && education.isValid && start.isValid && age.isValid) {
            firebaseMethods.setUser(this.state);
        }else {alert('fill in the registration fields')}
    }  

    handleClick = () => {
        this.props.confirm();
        const { name, lastName} = this.state;
        const userId = name.value + ' ' + lastName.value;
        this.setState({userId})
    }

    fieldState = (valid) => {
        return (!valid) ? <div className={styles.error}>Field is required</div >: null;
    }
  
    render() {
        const {name, lastName, email, phone, direction, education, start, age, skype, address, math, university} = this.state

        const formData = [
            {name: 'name', value: name.value, type: 'text', fieldState: this.fieldState(name.isValid), placeholder: 'Name', label: 'Name'},  
            {name: 'lastName', value: lastName.value, type: 'text', fieldState: this.fieldState(lastName.isValid), placeholder: 'Lastname', label: 'Lastname'},  
            {name: 'start', value: start.value, type: 'date', fieldState: this.fieldState(start.isValid), placeholder: 'Start date', label: 'Start date'},  
            {name: 'skype', value: skype.value, type: 'text', fieldState: this.fieldState(skype.isValid), placeholder: 'Skype', label: 'Skype'},  
            {name: 'email', value: email.value, type: 'text', fieldState: this.fieldState(email.isValid), placeholder: 'Email', label: 'Email'},  
            {name: 'phone', value: phone.value, type: 'text', fieldState: this.fieldState(phone.isValid), placeholder: '+375XXXXXXXXX', label: 'Phone'},  
            {name: 'direction', value: direction.value, fieldState: this.fieldState(direction.isValid), label: 'Direction'},  
            {name: 'education', value: education.value, type: 'text', fieldState: this.fieldState(education.isValid), placeholder: 'Education', label: 'Education'},  
            {name: 'age', value: age.value, type: 'number', fieldState: this.fieldState(age.isValid), placeholder: 'Age', label: 'Age'},  
            {name: 'address', value: address.value, type: 'text', fieldState: this.fieldState(address.isValid), placeholder: 'Address', label: 'Address'},  
            {name: 'math', value: math.value, type: 'number', fieldState: this.fieldState(math.isValid), placeholder: 'Math score', label: 'Math score'},  
            {name: 'university', value: university.value, type: 'number', fieldState: this.fieldState(university.isValid), placeholder: 'University score', label: 'University score'},  
        ]
        
        const form = formData.map(item => 
            (item.label !== 'Direction') ? 
                <Input name={item.name} type={item.type} value={item.value} onChange={this.onInputChange} fieldState={item.fieldState} placeholder={item.placeholder} label={item.label} /> : 
                <Select name={item.name} value={item.value}  onChange={this.onInputChange} fieldState={item.fieldState} label={item.label} />
        )

        return (
            <div className={styles.wrapper}>
                <form className={styles.form} onSubmit={this.handleSubmit}>
                    <section className={styles.form__content}>{form}</section>
                    <Button type={'submit'} onClick={this.handleClick} className={styles.confirm} text='Confirm' />
                </form>
                <Button onClick={this.props.cancel} className={styles.cancel} text='Cancel'/>
            </div>
        )
    }
}

export default MemberPage;
