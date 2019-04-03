import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = props => {
    return (
        <div>
            <h1>Friends</h1>
            <div>
                <NavLink to="/">Home</NavLink>
            </div>
            <div>
                <NavLink to="/newFriend">{props.isUpdating ? 'Update' : 'Add'} Friend</NavLink>
            </div>     
        </div> 
    );
}

export default Navigation;