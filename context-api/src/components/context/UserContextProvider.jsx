import UserContext from "./UserContext.js";
import { useState } from "react";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
