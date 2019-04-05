import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state=({});
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.props.isUpdating) {
            this.props.updateFriend();
        } else {
            this.props.addFriend();
        }
    }

    render() {
        return (
            <div>
                <h2>{this.props.isUpdating ? 'Update Friend' : 'Add New Friend'}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="name"
                        value={this.props.friend.name}
                        placeholder="name"
                        onChange={this.props.handleChanges}
                    />
                    <input 
                        type="text"
                        name="age"
                        value={this.props.friend.age}
                        placeholder="0"
                        onChange={this.props.handleChanges}
                    />
                    <input 
                        type="text"
                        name="email"
                        value={this.props.friend.email}
                        placeholder="email"
                        onChange={this.props.handleChanges}
                    />
                    <button type="submit">
                        {this.props.isUpdating ? 'Update Friend' : 'Add New Friend'}
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;