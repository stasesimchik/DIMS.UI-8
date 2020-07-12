import React from 'react';
import db from '../Firebase'; 
import { Button } from 'reactstrap';
import MembersUser from './MembersUser';
import GetUsers from './GetUsers';


class RegForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            age: '',
            education: '',
            direction: '',
            phone: '',
            email: '',
            birth: '',
            start: '',  
        };

        this.handleInputChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        const target = event.target;
        let value; 
        switch (target.name) {
            case 'name' : 
                value = target.value;
                break;
           case 'lastName' : 
                value = target.value;
                break;
            case 'age' : 
                value = target.value;
                break;
            case 'education' : 
                value = target.value;
                break;
            case 'direction' : 
                value = target.value;
                break;
            case 'phone' : 
                value = target.value;
                break;                    
            case 'email' : 
                value = target.value;
                break;
            case 'birth' : 
                value = target.value;
                break;
            case 'start' : 
                value = target.value;
                break;             
        } 
        const name = target.name;
    
        this.setState({
          [name]: value
        });      }
    
      handleSubmit(event) {
        event.preventDefault();
        let user = this.state;
        db.collection('users').doc(`${user.name+user.lastName}`).set(user);
      }

    render() {
        return (
            <form className='reg-form' onSubmit={this.handleSubmit}>
                <div className='form-block'>
                    <div>
                        <label>Name</label>
                        <input name='name' type='text' value={this.state.name} onChange={this.handleInputChange}></input>
                    </div>
                    <div>
                        <label>Last name</label>
                        <input name='lastName' type='text' value={this.state.lastName} onChange={this.handleInputChange}></input>
                    </div>
                </div>
                <div className='form-block'>
                    <div>
                        <label>Age</label>
                        <input name='age' type='number' value={this.state.age} onChange={this.handleInputChange}></input>
                    </div>
                    <div>
                        <label>Education</label>
                        <input name='education' type='text' value={this.state.education} onChange={this.handleInputChange}></input>
                    </div>
                </div>
                <div className='form-block'>
                    <div>
                        <label>Phone Number</label>
                        <input name='phone' type='text' value={this.state.phone} onChange={this.handleInputChange} placeholder='+375(__)___ __ __'></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input name='email' type='email' value={this.state.email} onChange={this.handleInputChange} placeholder='user@gmail.com'></input>
                    </div>
                </div> 
                <label>Direction</label>
                <select name='direction' value={this.state.direction} onChange={this.handleInputChange}>
                    <option value='JavaScript'>JavaScript</option>
                    <option value='Java'>Java</option>
                    <option value='.Net'>.Net</option>
                    <option value='Salesforce'>Salesforce</option>
                </select>
   
                <div className='form-block'>
                    <div>
                        <label>Date of birth</label>
                        <input name='birth' type='date' value={this.state.birth} onChange={this.handleInputChange} placeholder='user@gmail.com'></input>
                    </div>
                    <div>
                        <label>Start date</label>
                        <input name='start' type='date' value={this.state.start} onChange={this.handleInputChange} placeholder='user@gmail.com'></input>
                    </div>
                </div>
                <Button type="submit" color='primary'className='form-btn'>Save</Button>{' '}
            </form>
        )
    }
    
}

export default RegForm;