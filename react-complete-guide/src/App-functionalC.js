import React, { useState } from 'react'; 
import './App.css';
import Person from './Person/Person'; 

const app = props => {
 //personsState es el estado y setPersonsState permite modificarlo
  const [ personsState, setPersonsState] = useState({
    persons: [
      {name:"Max", age: 28},
      {name:"Sofi", age: 24},
      {name:"Luigi", age: 26},
    ],
    otherState: "some value"
  });


//forma optimizada de asegurarse de que el useState "mergee" el estado anterior y el modificado.
  const [otherState, setOtherState ] = useState('Some other jajjaja value');

  console.log(personsState, otherState);

//method
  const switchNameHandler = () => {
    //DONT DO THIS personsState.persons[0].name = "Maximilian";
    setPersonsState({
      persons: [
        { name: "Maxeeeemeeelian", age: 28 },
        { name: "Sofi", age: 24 },
        { name: "Luis Gines ", age: 26 },
      ],
      otherState: personsState.otherState
    })
  };
  
   return (
      <div className="App">
       <h1>Hi,  I am a React App</h1>
       <button onClick={switchNameHandler}>Switch Name</button>
       <Person name= {personsState.persons[0].name} age={personsState.persons[0].age}/>
       <Person name= {personsState.persons[1].name} age={personsState.persons[1].age}/>
       <Person name= {personsState.persons[2].name} age={personsState.persons[2].age}/>
       
       
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('H1', null, 'Hi, I am a React App' ));
  }

export default app;








 