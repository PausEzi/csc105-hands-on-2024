import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  number: z.number().min(1).max(100),
  query: z.enum(["love", "like"]),
  size: z.enum(["small", "medium", "large"]),
});

const FavouritesPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate(`/fav/${data.number}?q=${data.query}&size=${data.size}`);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Favourites</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-2">Number (1-100)</label>
          <input
            type="number"
            {...register("number", { valueAsNumber: true })}
            className="w-full p-2 border rounded"
          />
          {errors.number && <p className="text-red-500">{errors.number.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Query</label>
          <select {...register("query")} className="w-full p-2 border rounded">
            <option value="love">Love</option>
            <option value="like">Like</option>
          </select>
          {errors.query && <p className="text-red-500">{errors.query.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Size</label>
          <select {...register("size")} className="w-full p-2 border rounded">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          {errors.size && <p className="text-red-500">{errors.size.message}</p>}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FavouritesPage;