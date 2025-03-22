import { useParams, useSearchParams } from "react-router-dom";

const FavouriteDetailPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const size = searchParams.get("size");

  return (
    <div className="text-center mt-8">
      <h1 className="text-3xl font-bold">Favourite Details</h1>
      <p className="mt-4">
        Your favourite post is {query}. Post ID is {id}. Size is {size}.
      </p>
    </div>
  );
};

export default FavouriteDetailPage;