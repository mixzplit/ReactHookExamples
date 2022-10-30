import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {
  
  const {user} = useContext(UserContext);

  return (
    <>
      <h1>Home Page <span>{user?.name}</span></h1>
      <hr />
      
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
    </>
  )
}