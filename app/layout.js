import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import StoreProvider from "./providers/StoreProvider";
const inter = Inter({ subsets: ["latin"] });
import QueryProvider from "./providers/QueryProvider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <StoreProvider>
            <>
              <div className="flex justify-between bg-black text-white px-5 py-5 sticky top-0 z-50">
                <div className="flex gap-x-2">
                  <h1>SideBar</h1>
                  <h1>Logo</h1>
                </div>
                <div>
                  <ul className=" flex gap-x-2">
                    <li>Home</li>
                  </ul>
                </div>
              </div>
              <div className="flex overflow-hidden h-[100vh] ">
                <div className=" bg-black text-white h-[100vh] w-[15vw] overscroll-none overflow-hidden">
                  <ul className="flex flex-col  py-5 w-full  items-center gap-y-3">
                    <Link
                      href="/"
                      className="py-2 border-white border rounded-2xl flex justify-center w-[12vw]"
                    >
                      Home
                    </Link>
                    <Link
                      href="/dashboard"
                      className="py-2 border-white border rounded-2xl flex justify-center w-[12vw]"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/adduser"
                      className="py-2 border-white border rounded-2xl flex justify-center w-[12vw]"
                    >
                      About
                    </Link>
                  </ul>
                </div>

                <div className=" flex justify-center w-full py-10"
                >
                  {children}
                </div>
              </div>
            </>
          </StoreProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
