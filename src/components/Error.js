import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const errorDetails = useRouteError();
  return (
    <div>
      <h1>ooops</h1>
      <h2>Something went wrong</h2>
      <h2>
        {errorDetails?.status} {errorDetails?.statusText}
      </h2>
    </div>
  );
};

export default Error;
