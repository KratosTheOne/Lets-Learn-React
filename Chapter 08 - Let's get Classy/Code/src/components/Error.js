import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError(Error);
    console.log(err);
    return (
        <div>
            {/* <h1 align="center">OOPS!!!!!</h1>
            <h1 align="center">Something went wrong</h1> */}
            <h1 align="center">{err.status + ' : ' + err.statusText}</h1>
            <img className="error-img" src="https://img.freepik.com/free-vector/oops-doodle-hand-drawn-vector-typography_53876-165815.jpg?w=2000" />
        </div>
    );
};

export default Error;