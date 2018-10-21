import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: null
    };
  }

  componentDidMount() {
    fetch("/hello")
      .then(res => res.json())
      .then((data) => {
        console.log('res data:', data);
        //this.setState({ username: user.username }
      }));
  }

  render() {
    return (
      <div>
        {this.state.greeting ? (
          <h1>{this.state.greeting}</h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
      </div>
    );
  }
}
