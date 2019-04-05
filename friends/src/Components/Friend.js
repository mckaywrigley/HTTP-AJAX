import React from 'react';
import './Friend.css';

const Friend = props => {
    return (
        <div className="friend">
            <p>Name: {props.friend.name}</p>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
            <button className="btn" onClick={e => props.populateForm(e, props.friend.id)}>Edit</button>
            <button className="btn" onClick={e => props.deleteItem(e, props.friend.id)}>Delete</button>
        </div>
    );
}

export default Friend;