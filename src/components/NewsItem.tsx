import React from "react";
import { Link } from "react-router-dom";
import { News } from "../types/news";

interface NewsItemProps {
  news: News;
}

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-md overflow-hidden transition-colors duration-200">
      {news.urlToImage && (
        <img
          src={news.urlToImage}
          alt={news.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">
          {news.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {news.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(news.publishedAt).toLocaleDateString()}
          </span>
          <Link
            to={`/news/${encodeURIComponent(news.title)}`}
            className="text-primary-light dark:text-primary-dark hover:underline"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
