import React, { useState } from "react";

import "./App.css";

  function App() {
  const [isDataFetch, setisDataFetch] = useState(false);


  const [users, setUsers] = useState([]);
  const [isBtnClick, setisBtnClick] = useState(false);


  const userInfo = async () => {
    setisBtnClick(true);    
    
    const response = await fetch("https://reqres.in/api/users?page=1");

    const jsonresponse = await response.json();

    setUsers(jsonresponse.data);

    setInterval(() => {
      setisDataFetch(true);
    }, 1500);


  };
  
/*const App = () => {
  const [isDataFetch, setisDataFetch] = useState(false);
  const [users, setUsers] = useState([]);
  const [isBtnClick, setisBtnClick] = useState(false);

  const loadUsers = async () => {
    setisBtnClick(true);
    const response = await fetch('https://reqres.in/api/users');
    const res = await response.json();
    // console.log(res)
    setUsers(res.data);
    setInterval(() => {
      setisDataFetch(true);
    }, 1500);
  }
  */
 

  return ( 

    <div className="App">
      <div className="navbar">
        <h2>LGMVIP TASK 2-HIBA MARIAM.H</h2>
        <h6>WELCOME USERS!</h6>
        <button onClick={userInfo }>Get Users</button>
        
      </div>
        

    {
     isBtnClick ?(
      isDataFetch ?(

      <div className="grid">
        {
        users.map(({ id, first_name, last_name, avatar, email }) => {
          return(

          <div className="card">
            <div className="picture">
              <img src={avatar}></img>
            </div>
            <hr></hr>
            <div>
              <h3>{first_name} {last_name}</h3>
              <p>{email}</p>
            </div>
          </div>
      )})}
    </div>
      ):(<div classname="loaders">LOADING.....</div>)):(<> </>)
  }
  </div>

  );

}

export default App;