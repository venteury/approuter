"use client";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "./slices/userSlice";
import Link from "next/link";

export default function Home() {
  const users = useSelector((state) => state.user.users) || [];
  const dispatch = useDispatch();

  return (
    <main className="">
      <div className="flex justify-end mb-3">
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded"
          href="/adduser"
        >
          + New User
        </Link>
      </div>

      <table className="w-[80vw]  bg-white shadow-md rounded-lg overflow-auto ">
        <thead>
          <tr className="bg-blue-500 text-white text-left">
            <th className="px-6 py-3 text-sm font-semibold">S.No.</th>
            <th className="px-6 py-3 text-sm font-semibold">Name</th>

            <th className="px-6 py-3 text-sm font-semibold">Email</th>
            <th className="px-6 py-3 text-sm font-semibold  text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="">
          {users &&
            users.map((user, index) => (
              <tr
                key={user.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-blue-100 transition duration-150 ]`}
              >
                <td className="border-t px-6 py-4 text-gray-700">
                  {index + 1}
                </td>
                <td className="border-t px-6 py-4 text-gray-700">
                  {user.name}
                </td>
                <td className="border-t px-6 py-4 text-gray-700">
                  {user.email}
                </td>
                <td className="border-t px-6 py-4 text-gray-700">
                  <div className="flex gap-x-2 justify-evenly">
                    <Link href={`/edituser/${user.id}`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-6 rounded">
                        Edit
                      </button>
                    </Link>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white  py-1 px-4 rounded"
                      type="button"
                      onClick={() => dispatch(deleteUser(user.id))}
                    >
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
