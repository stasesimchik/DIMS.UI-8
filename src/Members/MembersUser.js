import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function MembersUser(props) {
    const users = props.data; 
    console.log(users);
    
    return users.map(function(item,index){
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name + ' ' + item.lastName}</td>
                <td>{item.direction}</td>
                <td>{item.education}</td>
                <td>{item.start}</td>
                <td>{item.age}</td>
                <td>
                    <div className='members-btn__block'>
                        <Link to='/membersProgress' className='nav-menu__link'><Button color="secondary">P</Button>{' '}</Link>
                        <Link to='/membersTasks' className='nav-menu__link'><Button color="secondary">T</Button>{' '}</Link>
                        <Link to='/membersEdit' className='nav-menu__link'><Button color="secondary">E</Button>{' '}</Link>
                        <Button color="danger">D</Button>{' '} 
                    </div>                       
                </td>
            </tr>
        )
    })

}

export default MembersUser; 


