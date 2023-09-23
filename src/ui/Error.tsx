import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import LinkButton from './LinkButton';

function ErrorPage() {
  const error = useRouteError();
  let message = 'Something went wrong 😢';

  if (isRouteErrorResponse(error)) {
    message = error.data;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default ErrorPage;
