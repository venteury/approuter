"use client";
import React from "react";
import Card from "@/components/Card";
import { useInfiniteQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const fetchPosts = async ({ pageParam = 1 }) => {
    const res = await fetch(
      `https://api.escuelajs.co/api/v1/products?offset=${pageParam}&limit=9`
    );
    return res.json();
  };

  const {
    isLoading,
    isError,
    error,
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["data"],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length < 9) {
        return undefined;
      }
      return pages.length + 10;
    },
  });

  if (isLoading) {
    return <div className="flex justify-center items-center w-[150vh] h-screen text-green-500">Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);

  return (
    <div className="px-5">
      <div className="grid grid-cols-3 gap-4 overflow-auto h-[90vh] mt-10">
        {data.pages.map((page) =>
          page.map((item) => <Card key={item.id} product={item} />)
        )}
      </div>
      <div className="flex justify-center text-blue-500 ">
        {isFetchingNextPage && <div>Loading more...</div>}
        {hasNextPage && !isFetchingNextPage && (
          <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage} className="text-blue-500 border-blue-500 border mt-2 px-3 rounded-2xl">
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
