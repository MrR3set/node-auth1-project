import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from "../utils/axiosWithauth"

function UserList() {

  const [data,setData] = useState([]);

  useEffect(()=>{
    axiosWithAuth().get("/api/users")
    .then(res=>{
      console.log(res);
      setData(res.data);
    })
  },[])

  return (
    <div className="UserList-wrapper">
        <div className="Userlist">
        <h1>User list</h1>
          {data.map(user=>{
            return <div key="id" className="user">{user.username}</div>
          })}
        </div>
    </div>
  );
}

export default UserList;
