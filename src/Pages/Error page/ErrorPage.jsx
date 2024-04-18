import { useRouteError } from "react-router-dom";
import NotFound from "../../Components/Not Found/NotFound";

const ErrorPage = () => {
  const errorData = useRouteError();

  return (
    <div className="flex justify-center items-center min-h-screen" >
      <div className="flex justify-center items-center w-full h-full" >
        {errorData.status === 404 ? (
          <NotFound></NotFound>
        ) : (
          <h1>Something went wrong</h1>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
