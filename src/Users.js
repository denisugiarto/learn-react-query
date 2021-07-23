import React from "react";
import Loader from "react-loader-spinner";
import { useQuery } from "react-query";
import * as api from "./usersApi";

const Users = ({ setUserId }) => {
  const { data, isLoading, isError } = useQuery("users", api.getUsers);

  if (isLoading) {
    return (
      <Loader
        type="ThreeDots"
        color="#00BFBF"
        height={50}
        width={50}
        timeout={5000}
      />
    );
  }

  if (isError) {
    return "something get error";
  }

  return (
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => setUserId(user.id)}>View</button>
          </li>
        ))}
      </ul>
  );
};

export default Users;
