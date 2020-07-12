import React from 'react';
import db from '../Firebase'; 
import MembersUser from './MembersUser';

class GetUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        const users = [];
        db.collection("users").get()
        .then(querySnapshot => querySnapshot.forEach(function(doc) {
                users.push(doc.data());
                })
        )
        .then(this.setState({ 
            users: users
         }))
    }

    render() {
        console.log(this.state.users)
        return(<MembersUser data={this.state.users} />)
    }
}

export default GetUsers;


