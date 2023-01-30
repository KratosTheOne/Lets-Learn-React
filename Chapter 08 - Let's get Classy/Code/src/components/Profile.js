import { useState, useEffect } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      // API calls are made here
        const timer = setInterval(() => {
            console.log("Namaste React OP");
        }, 1000);

        console.log("useEffect");
        return () => {
            clearInterval(timer);
            console.log("useEffect Return");
        }
    }, []);
    
    console.log("render");

    return (
        <div>
            <h1>Profile Page</h1>
            <h2>Name: {props.name}</h2>
            <h2>Count: {count}</h2>
            <button 
                onClick={() => setCount(1)}
            >Inc Count</button>
        </div>
    );
};

export default Profile;