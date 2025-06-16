import React from "react";

const NewsSkeleton: React.FC = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md animate-pulse">
      <div className="w-full h-48 bg-gray-200 dark:bg-gray-700" />
      <div className="p-4">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
        </div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mt-4" />
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-24 mt-4" />
      </div>
    </div>
  );
};

export default NewsSkeleton;
