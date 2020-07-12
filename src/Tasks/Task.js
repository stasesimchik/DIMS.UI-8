import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Task(props) {
    const tasks = props.data; 
   
    return tasks.map(function(item,index){
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.deadline}</td>
                <td>{item.start}</td>
                <td>
                    <div className='members-btn__block'>
                        <Link to='/membersProgress' className='nav-menu__link'><Button color="success">S</Button>{' '}</Link>
                        <Button color="danger">F</Button>{' '} 
                    </div>                       
                </td>
            </tr>
        )
    })

}

export default Task; 


