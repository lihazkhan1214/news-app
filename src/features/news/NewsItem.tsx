import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ImageWithFallback from "../../components/ImageWithFallback";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface NewsItemProps {
  post: Post;
  author: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ post, author }) => {
  const { t } = useTranslation();
  const placeholderImage = "";

  return (
    <article className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <ImageWithFallback
        src={`https://picsum.photos/300/200?random=${post.id}`}
        alt={post.title}
        className="w-full h-48 object-cover"
        fallbackSrc={placeholderImage}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {post.body}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {t("author")}: {author}
        </p>
        <Link
          to={`/post/${post.id}/${post.userId}`}
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
        >
          {t("read_more")}
        </Link>
      </div>
    </article>
  );
};

export default NewsItem;
