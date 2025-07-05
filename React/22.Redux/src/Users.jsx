import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./slices/userSlice";

function Users() {
  const users = useSelector((state) => state.userInfo.users);

  const dispatch = useDispatch();

  const deleteUserInfo = (index) => {
    dispatch(deleteUser(index));
  };

  return (
    <div>
      <h1>User List</h1>
      {users?.map((user, index) => {
        return (
          <div key={index}>
            <h1>Name: {user.name}</h1>
            <h2>Age: {user.age}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Contact: {user.contact}</h2>
            <button onClick={() => deleteUserInfo(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
