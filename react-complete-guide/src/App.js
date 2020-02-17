import React, { Component } from 'react'; 
import './App.css';
import Person from './Person/Person'; 

class App extends Component {
  state = {
    persons: [
      {name:"Max", age: 28},
      {name:"Sofi", age: 24},
      {name:"Luigi", age: 26},
    ]
  }

  //method
  switchNameHandler = (newName) => {
    //DONT DO THIS this.state.persons[0].name = "Maximilian";
    this.setState({
      persons: [
      {name: newName , age: 28},
      {name:"Sofi", age: 24},
      {name: "Luis Gines ", age: 26 },
      
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      {name: "M ax" , age: 28},
      {name:"Sofi", age: 24},
      {name: event.target.value, age: 26 },
      
    ]})
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
       {/* el bind  */}
       <button style={style}  onClick={this.switchNameHandler.bind(this)}>Switch Name</button>
       <Person
         name={this.state.persons[0].name}
         age={this.state.persons[0].age}
         click={this.switchNameHandler}/>
       
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
       
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} changed={this.nameChangedHandler}/>
       
       
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('H1', null, 'Hi, I am a React App' ));
  }
}

export default App;
 