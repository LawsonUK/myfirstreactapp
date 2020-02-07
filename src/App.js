import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "Black", id: 1 },
      { name: "Yoshi", age: 20, belt: "Green", id: 2 },
      { name: "Claire", age: 30, belt: "Pink", id: 3 }
    ]
  };

  addNinja = ninja => {
    ninja.id = Math.random();
    this.setState(prevState => {
      return {
        ninjas: [...prevState.ninjas, ninja]
      };
    });
  };

  deleteNinja = id => {
    this.setState(prevState => {
      return {
        ninjas: prevState.ninjas.filter(ninja => {
          return ninja.id !== id;
        })
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
