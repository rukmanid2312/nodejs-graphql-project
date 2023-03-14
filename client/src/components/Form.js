import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";

const Form = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [ip_address, setIPAddress] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);
  const addUser = () => {
    createUser({
      variables: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        gender: gender,
        ip_address: ip_address,
      },
    });
    if (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={first_name}
        placeholder="first name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      ></input>
      <input
        type="text"
        value={last_name}
        placeholder="last name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      ></input>
      <input
        type="text"
        value={email}
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <input
        type="text"
        value={gender}
        placeholder="gender"
        onChange={(e) => {
          setGender(e.target.value);
        }}
      ></input>
      <input
        type="text"
        value={ip_address}
        placeholder="ipaddress"
        onChange={(e) => {
          setIPAddress(e.target.value);
        }}
      ></input>
      <button onClick={addUser}>Create User</button>
    </div>
  );
};

export default Form;
