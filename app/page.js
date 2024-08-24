"use client";
import { useSelector } from "react-redux";

export default function Home() {
  const users = useSelector((state) => state.user.users) || [];

  return (
    <main className="">
      <table className="w-[80vw] bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-500 text-white text-left">
            <th className="px-6 py-3 text-sm font-semibold flex ">Name</th>

            <th className="px-6 py-3 text-sm font-semibold  ">Email</th>
            <th className="px-6 py-3 text-sm font-semibold  text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => (
              <tr
                key={user.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-blue-100 transition duration-150`}
              >
                <td className="border-t px-6 py-4 text-gray-700">
                  {user.name}
                </td>
                <td className="border-t px-6 py-4 text-gray-700">
                  {user.email}
                </td>
                <td className="border-t px-6 py-4 text-gray-700">
                  <div className="flex gap-x-2 justify-evenly">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-6 rounded">
                      Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white  py-1 px-4 rounded">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
}
