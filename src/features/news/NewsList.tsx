import React from "react";
import { useGetPostsQuery } from "./newsApi";
import NewsItem from "./NewsItem";
import NewsSkeleton from "./NewsSkeleton";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const NewsList: React.FC = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <NewsSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <div>Error loading news</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts?.map((post: Post) => (
        <NewsItem key={post.id} post={post} author="Unknown" />
      ))}
    </div>
  );
};

export default NewsList;
