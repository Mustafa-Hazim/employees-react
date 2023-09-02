import { useEffect, useState } from 'react';
import './App.css';
import List from './components/list/List';
import Tools from './components/tools/Tools';
import axios from 'axios';


function App() {
  const apiBase = 'http://192.168.178.50:3000'


    // create the component state: 
    const [users, setUsers] = useState(false)


    const url = `${apiBase}/users/`
    useEffect(() => {
        axios.get(url).then(res => {setUsers(res.data)}).catch(err => {console.log(err)})
    }, [url])

  return (
    <div className="App">
      <Tools users={users}  setUsers={setUsers} refreshAllUsers={refreshAllUsers}/>
      <List apiBase={apiBase} users={users} />
    </div>
  );


  function refreshAllUsers (){
    axios.get(url).then(res => {setUsers(res.data)}).catch(err => {console.log(err)})
  }
}


export default App;
