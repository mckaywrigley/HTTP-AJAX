import React from 'react';

const Friend = props => {
    return (
        <div>
            <p>{props.friend.name}</p>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
            <button onClick={e => props.populateForm(e, props.friend.id)}>Edit</button>
            <button onClick={e => props.deleteItem(e, props.friend.id)}>Delete</button>
        </div>
    );
}

export default Friend;