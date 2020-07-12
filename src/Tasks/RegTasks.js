import React from 'react';
import db from '../Firebase'; 
import { Button } from 'reactstrap';


class RegTasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            deadline: '',
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
            case 'description' : 
                value = target.value;
                break;    
            case 'deadline' : 
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
        let task = this.state;
        db.collection('tasks').doc(`${task.name}`).set(task);
      }

    render() {
        return (
            <>
            <form className='reg-form' onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input name='name' type='text' value={this.state.name} onChange={this.handleInputChange}></input>
                <label>Description</label>
                <textarea rows='5' name='description' value={this.state.description} onChange={this.handleInputChange}></textarea>
                <label>Deadline</label>
                <input name='deadline' type='date' value={this.state.deadline} onChange={this.handleInputChange} placeholder='user@gmail.com'></input>
                <label>Start</label>
                <input name='start' type='date' value={this.state.start} onChange={this.handleInputChange} placeholder='user@gmail.com'></input>
                <Button type="submit" color='primary'className='form-btn'>Save</Button>{' '}
            </form>
            </>
        )
    }
    
}

export default RegTasks;