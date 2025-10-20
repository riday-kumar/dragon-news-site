import { CiBookmark } from "react-icons/ci";
import { FaRegEye, FaShareAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { title, id, author, rating, total_view, thumbnail_url, details } =
    news;

  const formattedDate = new Date(author.published_date).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-lg  rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between bg-base-200 p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-3 items-center text-[20px] text-gray-500 *:hover:text-primary *:cursor-pointer">
          <CiBookmark />
          <FaShareAlt />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-3">
        <h3 className="text-lg font-bold leading-tight hover:text-primary cursor-pointer">
          {title}
        </h3>
      </div>

      {/* Image */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover rounded-xl"
        />
      </figure>

      {/* Details */}
      <div className="p-4 text-sm text-gray-700">
        {details.length > 200 ? (
          <Link to={`/news-details/${id}`}>
            {details.slice(0, 200)}...{" "}
            <span className="font-bold text-black cursor-pointer">
              Read More
            </span>
          </Link>
        ) : (
          <p>{details}</p>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 pb-4 border-t pt-3 text-sm text-gray-600">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500">
          <FaStar />
          <span className="font-semibold">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
