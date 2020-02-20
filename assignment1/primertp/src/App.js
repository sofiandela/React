import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const App = props => {

  //State
  const [initialInputState, setInitialInputState] = useState({
    user: " "
  });
//Second State para almacena el valor
  const [usersState, setUsersState] = useState([]);

  //console.log(usersState);
  {console.log(usersState)}
  return (
    <div className="App">
      <UserInput
        initialInputState={initialInputState}
        setInitialInputState={setInitialInputState}
        setUsersState={setUsersState}
        usersState={usersState}
      />
      <UserOutput
        usersState={usersState} />

    </div>
  );
}

export default App;
