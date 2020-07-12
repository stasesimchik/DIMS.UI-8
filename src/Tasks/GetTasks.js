import React from 'react';
import db from '../Firebase'; 
import Task from './Task';

class GetTasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        }
    }

    componentDidMount() {
        const tasks = [];
        db.collection("tasks").get()
        .then(querySnapshot => querySnapshot.forEach(function(doc) {
                tasks.push(doc.data());
                })
        )
        .then(this.setState({ 
            tasks: tasks
         }))
    }

    render() {
        return(<Task data={this.state.tasks} />)
    }
}

export default GetTasks;


