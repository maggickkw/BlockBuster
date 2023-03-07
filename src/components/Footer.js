import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-900 dark:border-b-1 dark:border-gray-900">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023
        <Link to="/" className="hover:underline">
          BlokBuster™
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://www.instagram.com/maggick_law/"
            rel="noreferrer"
            target="_blank"
            className="mr-4 hover:underline md:mr-6 "
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/king_maggick"
            rel="noreferrer"
            target="_blank"
            className="mr-4 hover:underline md:mr-6"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://github.com/maggickkw"
            rel="noreferrer"
            target="_blank"
            className="mr-4 hover:underline md:mr-6"
          >
            Github
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className="hover:underline">
            LinkedInc
          </a>
        </li>
      </ul>
    </footer>
  );
};
