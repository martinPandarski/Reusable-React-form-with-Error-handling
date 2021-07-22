import React, {useState} from 'react';
import InputForm from './components/InputForm';
import './App.css';
import UserList from './components/UserList';

function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (username, age) => {
    setUsersList((prevState) => {
      return [...prevState, {username: username, age: age}]
    });
  }

  return (
    <div>
     <InputForm onAddUser={addUserHandler}/>
     <UserList users={usersList}/>
    </div>
  );
}

export default App;
