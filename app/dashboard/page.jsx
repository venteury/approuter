"use client";
import React, { useEffect, useRef } from "react";
import Card from "@/components/Card";
import { useInfiniteQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const containerRef = useRef(null);
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

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

    if (scrollTop + clientHeight >= scrollHeight - 5 && hasNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [hasNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-[150vh] h-screen text-green-500">
        <div className="modal fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-[99]">
          <div>
            <div className="relative flex justify-center items-center ">
              <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
            </div>
            <div className="text-center  text-white text-sm mb-4">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="px-5">
      {isFetchingNextPage && (
        <div className="modal fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-[99]">
          <div>
            <div className="relative flex justify-center items-center mb-2">
              <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
              <img
                src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
                className="rounded-full h-28 w-28"
              ></img>
            </div>
            <div className="text-center py-2 text-white">Loading more...</div>
          </div>
        </div>
      )}
      <div
        className="grid grid-cols-3 gap-4 overflow-auto h-[90vh] mt-10"
        ref={containerRef}
      >
        {data.pages.map((page) =>
          page.map((item) => <Card key={item.id} product={item} />)
        )}
      </div>

      {/* <div className="flex justify-center text-blue-500 text-lg ">
        {isFetchingNextPage && <div>Loading more...</div>}
        {hasNextPage && !isFetchingNextPage && (
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="text-blue-500 border-blue-500 border mt-2 px-3 rounded-2xl"
          >
            Load More
          </button>
        )}
      </div> */}
    </div>
  );
};

export default Dashboard;
