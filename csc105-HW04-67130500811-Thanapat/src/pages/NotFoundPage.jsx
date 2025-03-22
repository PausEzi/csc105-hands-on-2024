import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-center mt-8">
      <h1 className="text-3xl font-bold text-red-500">404 - Page Not Found</h1>
      <Link to="/" className="text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;