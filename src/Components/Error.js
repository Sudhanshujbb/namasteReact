import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const er = useRouteError();
    return(
        <div>
            <h1> Error Page 😥</h1>
            <h4>{er.status}: {er.statusText}</h4>
        </div>
    );
}

export default Error;