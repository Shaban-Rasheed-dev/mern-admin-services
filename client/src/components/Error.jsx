import { NavLink } from "react-router-dom";
export const Error = () => {
  return (
    <>
      <div className="error-page d-flex align-items-center justify-content-center">
        <div className="error-container text-center p-4">
          <h1 className="error-code mb-0">404</h1>
          <h2 className="display-6 error-message mb-3">Page Not Found</h2>
          <p className="lead error-message mb-5">
            We can't seem to find the page you're looking for.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <NavLink to="/" className="btn btn-color px-4 py-2">
              Return Home
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
