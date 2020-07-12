import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MembersPage from './Members/MembersPage';
import MembersProgress from './Members/MembersProgress';
import TasksPage from './Tasks/TasksPage';
import MembersTasks from './Members/MembersTasks';
import LoginPage from './Login/LoginPage';

function Routes() {
    return (
        <div>
            <Route path='/members'> 
                <MembersPage />
            </Route>
            <Route path='/membersProgress'> 
                <MembersProgress />
            </Route>
            <Route path='/membersTasks'> 
                <MembersTasks />
            </Route>
            <Route path='/tasks'> 
                <TasksPage />
            </Route>
            <Route path='/login'> 
                <LoginPage />
            </Route>
            <Redirect to='/login' />
        </div>
    )
} 

export default Routes;