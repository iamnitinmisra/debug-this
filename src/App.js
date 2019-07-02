import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) { // misspelled constructor 'contsructor'
  super(props) // missing super
    this.state = {
      friendsList: ["john", "jacob", "jingle", "heimer", "schmidt"],
      friend: ""
    };
    
    // function binds were missing
    this.changeHandler = this.changeHandler.bind(this)
    this.addFriend = this.addFriend.bind(this)
    this.deleteFriend = this.deleteFriend.bind(this)
    // function binds were missing

  }
  changeHandler(event) {
    this.setState({
      friend: event.target.value
    });
  }

  addFriend() {
    // this.State.friendsList.push(this.state.friend); incorrect way to set state
    
    this.setState({ //proper way to setState, but didnt use a copy of the array
      friendsList: [...this.state.friendsList, this.state.friend] 
    })
  }

  deleteFriend(index) {
    // this.State.friendsList.splice(index, 1); incorrect way to set state
    const myUpdatedList = this.state.friendsList.slice()
    myUpdatedList.splice(index, 1)
    this.setState({
      friendsList: myUpdatedList
    })

    }
  

  render() {
  const mappedFreinds = this.state.friendsList.map((friend, index) => {
    // add return
    return (
      <div key={index}>
        <span>{friend}</span>
        {/* pass arrow function, invoke delete friend and pass in index */}
        <button onClick={() => this.deleteFriend(index)}>Delete</button>
      </div>
    );
  });

    return (
      <div className="App">
        <div>{mappedFreinds}</div>
        <input
          type="text"
          onChange={this.changeHandler}
          value={this.state.friend}
        />
        <button onClick={this.addFriend}>Add Friend</button>
      </div>
    );
  }
}
export default App;
