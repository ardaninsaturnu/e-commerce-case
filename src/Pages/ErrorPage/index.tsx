import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error : any = useRouteError();

    return(
        <>
            <div className="text-white flex justify-center items-center flex-col h-screen" id="error-page">
                <h1 className="text-3xl text-orange-400">Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </>
    )
}

export default ErrorPage;