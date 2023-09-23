import {
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  let message = "Something went wrong 😢";

  if (isRouteErrorResponse(error)) {
    message = error.data;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default ErrorPage;
