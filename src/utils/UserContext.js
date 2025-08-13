import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Default Gupta",
    email: "test@gmail.com",
    },
    setUser: () => {},
});

export default UserContext;