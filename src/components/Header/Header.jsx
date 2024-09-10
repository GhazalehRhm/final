/* eslint-disable react/prop-types */
import { useState } from "react";
const Header = ({
  onFilter,
  onClicked,
  card,
  countLike,
  onProduct,
  likes,
  product,
}) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    onClicked(true);
  };
  const handleHome = () => {
    
    onClicked(false);
  };
  const handleLike = () => {
    onProduct(product.filter((item) => likes.includes(item.id)));
  };


  return (
    <>
      <section className="w-full">
        <header className="flex shadow-md py-4 px-4 sm:px-10 bg-transparent  font-sans min-h-[70px] tracking-wide relative z-50">
          <div className="flex flex-wrap items-center justify-between gap-4 w-full">
            <a href="javascript:void(0)">
              <img src="../Logo.png" alt="logo" className="w-36" />
            </a>
            <div
              id="collapseMenu"
              className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
            >
              <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-blue-600 text-blue-600 font-bold block text-base"
                   onClick={handleHome}
                  >
                    Home
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-blue-600 text-gray-400 font-bold block text-base"
                  >
                    Feature
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-blue-600 text-gray-400 font-bold block text-base"
                  >
                    About
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-blue-600 text-gray-400 font-bold block text-base"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex items-center max-lg:ml-auto space-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                className="cursor-pointer fill-gray-400 hover:fill-blue-600 inline"
              >
                <circle cx="10" cy="7" r="6" data-original="#000000" />
                <path
                  d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                  data-original="#000000"
                />
              </svg>

              <span className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  className="cursor-pointer fill-gray-400 hover:fill-red-600 inline"
                  viewBox="0 0 64 64"
                  onClick={handleLike}
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
                <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                  {countLike}
                </span>
              </span>

              <span className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  className="cursor-pointer fill-gray-400 hover:fill-blue-600 inline"
                  viewBox="0 0 512 512"
                  fill="#ffffff"
                  onClick={handleClick}
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                    fill="#ffffff"
                  ></path>
                </svg>
                <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                  {card.length}
                </span>
              </span>

              <button id="toggleOpen" className="lg:hidden  !ml-7">
                <svg
                  className="w-7 h-7 fill-gray-400"
                  fill="#000"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </header>
        <div className="w-screen  flex flex-col justify-center items-stretch ">
          <div className="bg-[url('../banner.png')]  bg-no-repeat  bg-cover  h-[500px] flex flex-col items-center justify-end pb-10">
            <div className="">
              <h1 className="text-gray-400  xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl xs:text-xl font-semibold bg-gray p-2 bg-opacity-40 rounded-sm">
                What are you looking for?
              </h1>
            </div>
            <div className="w-full mx-auto ">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="xl:w-4/12 lg:w-[60%] md:w-[70%] sm:w-[70%] xs:w-[90%] mx-auto flex gap-2 md:mt-6 xs:mt-4 ">
                  <input
                    type="text"
                    className="border  border-gray-200 w-full p-2 rounded-full "
                    placeholder="search..."
                    onChange={handleChange}
                    onKeyUp={(e) => {
                      console.log(e);
                      e.preventDefault();
                      if (e.code === "Enter") {
                        onFilter(search.toLowerCase());
                      }
                    }}
                  />

                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      onFilter(search.toLowerCase());
                    }}
                    className="px-[10px] p-[10px] bg-blue-600 text-md text-white  rounded-full font-semibold"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
