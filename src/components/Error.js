import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
  return (
    <div className="error-container">
      <h1>Something went wrong!</h1>
      <p>{error.data}</p>
    </div>
  );
};

export default Error;