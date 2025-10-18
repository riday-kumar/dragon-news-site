import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const news = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(news);
      return;
    } else if (id == "1") {
      const filteredNews = news.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = news.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [id, news]);

  return (
    <div>
      <h2 className="font-bold mb-5">
        {" "}
        Total <span className="text-secondary">{categoryNews.length}</span> News
        Found
      </h2>
      <div className="grid grid-cols-1 gap-10">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
