import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'mixzplit',
    email: 'siriusdla@gmail.com'
  });

  // Desestructuramos
  const {username, email} = formState;

  // Cambios del form
  // target es una propiedad del evento onChange
  // desestructuramos y despues obtenemos lo que
  // necesitamos
  const onInputChange = ({target}) => {
    const {name, value} = target
    // nuevo estado
    setFormState({
      ...formState, //estado actual
      [name]: value // nuevo valor de la propiedad name
    });
  }

  // Hooks Effect
  useEffect( () => {
    //console.log("use Effect Called!");
  }, []);

  useEffect( () => {
    //console.log("formState Called!");
  }, [formState]);

  useEffect( () => {
    //console.log("email Called!");
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input onChange={onInputChange} type="text" className="form-control" placeholder="Username" name="username" value={username} />
      <input onChange={onInputChange} type="email" className="form-control mt-2" placeholder="siriusdla@gmail.com" name="email" value={email} />

      { (username === 'mixzplit') && <Message />}

    </>
  );
};
