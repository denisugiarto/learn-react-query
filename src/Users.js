import React from "react";
import Loader from "react-loader-spinner";
import { useQuery } from "react-query";
import * as api from "./usersApi";

const Users = () => {
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
    <div>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
