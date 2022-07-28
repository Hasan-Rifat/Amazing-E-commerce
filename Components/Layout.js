import React from "react";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ Children }) => {
  const navLink = (
    <>
      <Link href={"/"}>
        <li>
          <a>Home</a>
        </li>
      </Link>
      <Link href={"/"}>
        <li>
          <a>Home</a>
        </li>
      </Link>
      <Link href={"/"}>
        <li>
          <a>Home</a>
        </li>
      </Link>
      <Link href={"/"}>
        <li>
          <a>Home</a>
        </li>
      </Link>
    </>
  );
  const newData = new Date().getFullYear();
  return (
    <div>
      <Head>
        <title>Amazing E-commerce store</title>
      </Head>
      <header className="bg-[#212838] shadow-2xl static top-0 z-50 text-white">
        <div className="max-w-7xl mx-auto">
          <div class="navbar">
            <div class="navbar-start">
              <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabindex="0"
                  class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {navLink}
                </ul>
              </div>
              <a class="btn btn-ghost normal-case text-xl">
                Amazing E-commerce
              </a>
            </div>
            <div class="navbar-center hidden lg:flex">
              <ul class="menu menu-horizontal p-0">{navLink}</ul>
            </div>
            <div class="navbar-end">
              <a class="btn">Get started</a>
            </div>
          </div>
        </div>
      </header>
      <main>{Children}</main>
      <footer className="max-w-7xl mx-auto">
        <footer class="text-gray-600 body-font">
          <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
              © {newData}
              <a
                href="https://twitter.com/knyttneve"
                class="text-gray-600 ml-1"
                rel="noopener noreferrer"
                target="_blank"
              >
                @Hasan-Rifat
              </a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a class="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </footer>
      </footer>
    </div>
  );
};

export default Layout;
