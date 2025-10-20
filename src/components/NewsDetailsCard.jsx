import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { title, image_url, details } = news;
  const navigate = useNavigate();
  return (
    <div className="p-5 rounded-md shadow-2xl space-y-5">
      <img className="w-full rounded-md h-80" src={image_url} alt="" />
      <p className="text-2xl font-bold">{title}</p>
      <p>{details}</p>
      <button onClick={() => navigate(-1)} className="btn btn-secondary">
        <FaArrowLeft></FaArrowLeft> All news in this category
      </button>
    </div>
  );
};

export default NewsDetailsCard;
