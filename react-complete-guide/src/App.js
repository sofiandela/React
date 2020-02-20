import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Sofi", age: 24 },
      { name: "Luigi", age: 26 },
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  //method
  switchNameHandler = (newName) => {
    //DONT DO THIS this.state.persons[0].name = "Maximilian";
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Sofi", age: 24 },
        { name: "Luis Gines ", age: 26 },

      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "M ax", age: 28 },
        { name: "Sofi", age: 24 },
        { name: event.target.value, age: 26 },

      ]
    })
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi,  I am a React App</h1>
        {/* el bind mergea el estado viejo con el estado nuevo */}
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle</button>
        {
          this.state.showPersons ?
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                click={this.switchNameHandler} />

              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age} />

              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}
                changed={this.nameChangedHandler} />
            </div> : null
        }




      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('H1', null, 'Hi, I am a React App' ));
  }
}

export default App;
