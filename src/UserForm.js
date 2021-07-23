import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import * as api from "./usersApi";

const UserForm = ({ user, setIsEditing }) => {
  const [fields, setFields] = useState({ ...user });

  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(api.updateUser, {
    onSuccess: (data) => {
      queryClient.setQueryData(['user', user.id], data)
      setIsEditing(false);
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.prefentDefault();

    mutate(fields);
  };

  if (isLoading) {
    return "Saving your changes...";
  }

  return (
    <div style={{ paddingTop: 20 }}>
      <form onSubmit={handleSubmit}>
        <label>
          Title:{" "}
          <input
            name="title"
            type="text"
            value={fields.title}
            onChange={handleChange}
          />
        </label>

        <label>
          Body:{" "}
          <input
            name="body"
            type="text"
            value={fields.body}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserForm;
