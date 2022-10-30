import { useState } from "react";
import { UserContext } from "./UserContext"

// const user = {
//   id: 123,
//   name: 'David Acurero',
//   email: 'acurero.david@gmail.com'
// }

export const UserProvider = ({children}) => {
  // state para los usuarios
  const [user, setUser] = useState();
  
  return (
    <UserContext.Provider value={{user, setUser}}>
      { children }
    </UserContext.Provider>
  )
}
