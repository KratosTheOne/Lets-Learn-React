import { createContext } from "react";

const UserContext = createContext({
    user :
    {
        name: "dummy name",
        email: "dummy@gmail.com",
    }
});

export default UserContext;