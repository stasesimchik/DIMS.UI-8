import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MembersGrid from '../components/MembersGrid/MembersGrid';
import MembersProgress from '../components/MembersProgress/MembersProgress';
import TasksGrid from '../components/TasksGrid/TasksGrid';
import MembersTasks from '../components/MembersTasks/MembersTasks';
import LoginPage from '../components/LoginPage/LoginPage';

function Routes() {
    return (
        <div>
            <Route path='/members'> 
                <MembersGrid />
            </Route>
            <Route path='/membersProgress'> 
                <MembersProgress />
            </Route>
            <Route path='/membersTasks'> 
                <MembersTasks />
            </Route>
            <Route path='/tasks'> 
                <TasksGrid />
            </Route>
            <Route path='/login'> 
                <LoginPage />
            </Route>
            <Redirect to='/login' />
        </div>
    )
} 

export default Routes;