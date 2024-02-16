'use client';

import React from 'react';
import { useEffect, useState } from 'react';


export default function Index() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');


  useEffect(() => {
    let i = 0;
    if(i==0){
      getUsers();
      i++;
    }
  }, []);

  async function getUsers() {
    const res = await fetch('https://jian01.vercel.app/user');
    const data = await res.json();
    setUsers(data);
  }

  async function insert() {
    const res = await fetch('https://jian01.vercel.app/item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    console.log(data);
    setUsers(data);
  }

  
  const handleAdd = async (e:any) => {
    console.log('email', e.target.value);
    setEmail(e.target.value);
  };

  

  return (
    <>
      <header>
        <div className="header-l-1">
          <h1>CoCoCat_Hotel</h1>
        </div>
        <div className="header-r-2">
        </div>

        <div className="header-r-1">
 
        </div> 

     
   
       <input type='text' onChange={handleAdd} />
        <button onClick={insert}>Add</button>
    
        
     
       
      </header>
      <main>
        <h1>Users</h1>
        <ul>
          {users.map((user: any) => (
            <li key={user._id}>{user.email}</li>
          ))}
        </ul>
      </main>

      <footer>
        <p>© 2021 CleanHomeFinder</p>
      </footer>

    </>
  );
}
