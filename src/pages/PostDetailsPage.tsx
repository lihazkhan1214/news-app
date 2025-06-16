import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetPostByIdQuery,
  useGetUserByIdQuery,
} from "../features/news/newsApi";
import { useTranslation } from "react-i18next";
import ImageWithFallback from "../components/ImageWithFallback";

const PostDetailsPage: React.FC = () => {
  const { id, userid } = useParams<{ id: string; userid: string }>();
  const postId = parseInt(id || "0");
  const userId = parseInt(userid || "0");
  const { data: post, isLoading, isError } = useGetPostByIdQuery(postId);
  const { data: user } = useGetUserByIdQuery(userId);
  const { t } = useTranslation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !post) {
    return <div>Error: Post not found</div>;
  }

  const placeholderImage = ""; // for future we can use placeholder image
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <ImageWithFallback
        src={`https://picsum.photos/800/400?random=${post.id}`}
        alt={post.title}
        className="w-full h-auto rounded-lg mb-6"
        fallbackSrc={placeholderImage}
      />
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
        {post.body}
      </p>
      <p className="text-gray-600 dark:text-gray-400">
        {t("author")}: {user?.name}
      </p>
    </div>
  );
};

export default PostDetailsPage;
