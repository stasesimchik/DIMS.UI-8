import React from 'react';
import { firebaseMethods} from '../Firebase/Firebase'; 
import Input from '../../common/Input'
import Textarea from '../../common/Textarea'
import styles from '../MembersPage/MemberPage.module.css'
import Validation from '../../helpers/validation'
import Button from '../../common/Button/Button';

class TasksPage extends React.Component {
        state = {
            name: {
                name: 'name',
                value: '',
                isValid: true,
            },
            description: {
                description: 'description',
                value: '',
                isValid: true,
            },
            deadline: {
                deadline: 'deadline',
                value: '',
                isValid: true,
            },
            start: {
                start: 'start',
                value: '',
                isValid: true,
            },
            taskId:'',
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
            const {name, deadline, start, description} = this.state
            if(name.isValid && deadline.isValid && description.isValid && start.isValid) {
                firebaseMethods.setTask(this.state);
            }else {alert('fill in the registration fields')}
        }  
    
        handleClick = () => {
            this.props.confirm();
            const { name } = this.state;
            const taskId = name.value;
            this.setState({taskId})
        }
    
        fieldState = (valid) => {
            return (!valid) ? <div className={styles.error}>Field is required</div >: null;
        }
    
    render() {
        const {name, deadline, start, description} = this.state

        const formData = [
            {name: 'name', value: name.value, type: 'text', fieldState: this.fieldState(name.isValid), placeholder: 'Name', label: 'Name'},  
            {name: 'deadline', value: deadline.value, type: 'date', fieldState: this.fieldState(deadline.isValid), placeholder: 'Deadline', label: 'Deadline'},  
            {name: 'start', value: start.value, type: 'date', fieldState: this.fieldState(start.isValid), placeholder: 'Start date', label: 'Start date'},  
            {name: 'description', value: description.value, type: 'textarea', fieldState: this.fieldState(description.isValid), placeholder: 'Description', label: 'Description'},  
        ]
        
        const form = formData.map(item => 
            (item.label !== 'Description') ? 
                <Input name={item.name} type={item.type} value={item.value} onChange={this.onInputChange} fieldState={item.fieldState} placeholder={item.placeholder} label={item.label} /> : 
                <Textarea name={item.name} value={item.value}  onChange={this.onInputChange} fieldState={item.fieldState} label={item.label} />
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

export default TasksPage;

