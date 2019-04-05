import React, { Component } from 'react';
import Friend from './Friend';

class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state=({});
    }

    render() {
        return(
            <div>
                {
                    this.props.friends.map((friend, id) => (
                        <Friend 
                            friend={friend}
                            key={id}
                            deleteItem={this.props.deleteFriend}
                            populateForm={this.props.populateForm}
                        />
                    ))
                }
            </div>
        );
    }
}

export default FriendsList;