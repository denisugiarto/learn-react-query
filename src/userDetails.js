import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { useQuery } from "react-query";
import UserForm from "./UserForm";
import * as api from "./usersApi";
const UserDetails = ({ userId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery(["user", userId], () => api.getUser(userId), {
    enabled: Boolean(userId),
  });

  if (!userId) {
    return "Select a user.";
  }

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
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "CANCEL" : "EDIT"}
      </button>

      {isEditing ? (
        <UserForm user={user} setIsEditing={setIsEditing}/>
      ) : (
        <div>
          <h2>{user.title}</h2>
          <p>{user.body}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
