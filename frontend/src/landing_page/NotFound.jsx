import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="container p-5 mx-5">
      <h1 className="mt-5 mb-4 fs-2">404 Page not found.</h1>
      <p className="mb-4 grey-text">
      We couldn’t find the page you were looking for.
      Visit <Link to="/">Tradehub’s home page</Link>
      </p>
    </div>
  );
}

export default NotFound;
