import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Vicky Gupta",
    email: "test@gmail.com",
    },
    setUser: () => {},
});

export default UserContext;