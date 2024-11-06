import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Oops! Something went wrong</h2>
            <p>{error.status} {error.statusText || error.message}</p>
        </div>
    );
};

export default ErrorPage;