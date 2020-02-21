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
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: "Sofi", age: 24 },
        { name: event.target.value, age: 26 },

      ]
    })
  }

  //queremos borrar una persona del array de personas
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
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

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index ) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}/>
          })}  
         </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi,  I am a React App</h1>
        {/* el bind mergea el estado viejo con el estado nuevo */}
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Show Persons</button>
          {persons}
      </div>
    );
    
  }
}

export default App;


              // <Person
              //   name={this.state.persons[0].name}
              //   age={this.state.persons[0].age}
              //   click={this.switchNameHandler} />

              // <Person
              //   name={this.state.persons[1].name}
              //   age={this.state.persons[1].age} />

              // <Person
              //   name={this.state.persons[2].name}
              //   age={this.state.persons[2].age}
              //   changed={this.nameChangedHandler} />