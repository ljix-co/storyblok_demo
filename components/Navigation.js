import { useState } from "react";
import Link from "next/link";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative bg-slate-600 ">
      <div className="w-5/6 mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-2 md:justify-start md:space-x-10">
          <div>
          <p className="leading-relaxed text-white">made with</p>
            <Link href="/">
              <a>
                <span className="sr-only">Storyblok</span>
                <img
                  className="h-20 w-auto sm:h-10 hidden sm:block"
                  src='https://a.storyblok.com/f/88751/251x53/0d3909fe96/storyblok-primary.png'
                  alt="Storyblok"
                />
                <img
                  className="h-20 w-auto sm:h-10 sm:hidden"
                  src='https://a.storyblok.com/f/88751/92x106/835caf912a/storyblok-logo.png'
                  alt="Storyblok"
                />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
              {/* <!-- Heroicon name: outline/menu --> */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
