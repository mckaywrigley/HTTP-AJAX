import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import axios from 'axios';
import FriendsList from './Components/FriendsList';
import Form from './Components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state=({
      friends: [],
      error: '',
      friend: {
        name: '',
        age: '',
        email: ''
      },
      deleteError: '',
      deleteSuccessMessage: '',
      isUpdating: false
    });
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => {
        this.setState({
          friends: res.data
        })
      }) 
      .catch(err => console.log(err));
  }

  handleChanges = e => {
    e.persist();
    this.setState(prevState => {
      return {
        friend: {
          ...prevState.friend,
          [e.target.name]: e.target.value
        }
      };
    });
  }

  addFriend = () => {
    axios.post('http://localhost:5000/friends', this.state.friend)
    .then(res => {
      this.setState({
        friends: res.data
      });
      this.props.history.push('/');
    })
    .catch(err => console.log(err));
  };

  deleteFriend = (e, friendId) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/friends/${friendId}`)
      .then(res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
      console.log('clicked');
  };

  populateForm = (e, id) => {
    e.preventDefault();
    this.setState({
      friend: this.state.friends.find(friend => friend.id === id),
      isUpdating: true
    });
    this.props.history.push('/newFriend');
  }

  updateFriend = () => {
    axios.put(`http://localhost:5000/friends/${this.state.friend.id}`, this.state.friend)
      .then(res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
     <div>
       <Navigation 
        isUpdating={this.state.isUpdating}
       />
       <Route 
        exact path="/"
        render = { props => (
          <FriendsList 
            {...props}
            friends={this.state.friends}
            deleteFriend={this.deleteFriend}
            populateForm={this.populateForm}
          />
        )}
       />
       <Route 
        path="/newFriend"
        render = { props => (
          <Form 
            {...props}
            handleChanges={this.handleChanges}
            addFriend={this.addFriend}
            friend={this.state.friend}
            isUpdating={this.state.isUpdating}
            updateFriend={this.updateFriend}
          />
        )}
       />
     </div>
    );
  }
}

export default App;
