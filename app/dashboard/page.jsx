import React from "react";
import Card from "@/components/Card";

const Dashboard = () => {
  return (
    <div className="px-5 ">
      {/* <h1 className="text-3xl font-bold mt-1">Dashboard</h1> */}
      <div className="grid grid-cols-3 gap-4 overflow-auto h-[90vh] mt-10">
        {[1, 2, 3, 4, 5, 1, 2, 2, 3, 2, 2, 2, 2, 3, 2].map((item) => (
          <Card key={item} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
