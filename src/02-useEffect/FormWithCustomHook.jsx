import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {

  const {formState, onInputChange, onResetForm} = useForm({
    username: "",
    email: "",
    password: "",
  });

  const {username, email, password} = formState;

  // Hooks Effect
  useEffect(() => {
    //console.log("use Effect Called!");
  }, []);

  useEffect(() => {
    //console.log("formState Called!");
  }, [formState]);

  useEffect(() => {
    //console.log("email Called!");
  }, [email]);

  return (
    <>
      <h1>Form con Custom Hook</h1>
      <hr />

      <input
        onChange={onInputChange}
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
      />
      <input
        onChange={onInputChange}
        type="email"
        className="form-control mt-2"
        placeholder="siriusdla@gmail.com"
        name="email"
        value={email}
      />
      <input
        onChange={onInputChange}
        type="password"
        className="form-control mt-2"
        placeholder="contraseña"
        name="password"
        value={password}
      />

      <button onClick={ onResetForm } className="btn btn-danger">Borrar</button>

    </>
  );
};
