/* eslint-disable react/prop-types */
import { useEffect } from "react";

const ProductCard = ({
  onProduct,
  product,
  filter,
  onCountLike,
  likes,
  onLikes,
  card,
  onCard,
}) => {
  useEffect(() => {
    let flag = true;
    getProducts(flag);
    return () => {
      console.log("cleanup");
      flag = false;
    };
  }, []);

  const getProducts = (flag) => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        if (flag) onProduct(data);
      })
      .catch(() => {
        console.log("error");
      });
  };

  const handleLike = (item) => {
    if (likes.includes(item.id)) {
      onLikes(likes.filter((i) => i != item.id));
      onCountLike((count) => count - 1);
    } else {
      onLikes([...likes, item.id]);
      onCountLike((count) => count + 1);
    }
  };

  const handleOrder = (item) => {
    let oldItem = card.filter((i) => i.id === item.id)[0];
    if (oldItem) {
      let arr = card.filter((i) => i.id != item.id);
      oldItem.quantity++;
      onCard([...arr,oldItem])
    } else
      onCard([
        ...card,
        { title: item.title, image: item.image, id: item.id, quantity: 1 },
      ]);
  };

  return (
    <>
      <div className=" p-10 grid lg:grid-cols-4 gap-4 md:grid-cols-2 ">
        {product
          .filter(
            (item) =>
              filter.length === 0 || item.title.toLowerCase().includes(filter)
          )
          .map((item) => (
            <div
              key={item.id}
              className="flex flex-col p-5 bg-gray-50 w-full  max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4"
            >
              <div className="flex items-center  gap-2 px-6">
                <h3 className="mb-10 mt-5 text-gray-800 font-semibold flex-1">
                  {item.title}
                </h3>
                {!likes.includes(item.id) ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    className="cursor-pointer fill-blue-600 shrink-0 mb-10 mt-5"
                    viewBox="0 0 64 64"
                    onClick={() => handleLike(item)}
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    className="cursor-pointer fill-red-600 shrink-0 mb-10 mt-5"
                    viewBox="0 0 64 64"
                    onClick={() => handleLike(item)}
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                )}
              </div>
              <div className="grid justify-items-center m-5">
                <img
                  className="p-3"
                  src={item.image}
                  style={{ maxHeight: "200px" }}
                />
              </div>
              <div className="flex-1">
                <p className="text-sm p-2 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-8 flex items-center flex-wrap gap-4">
                <h3 className="text-xl text-gray-800 font-bold flex-1">
                  {item.price} $
                </h3>
                <span className="mr-3 relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    className="cursor-pointer fill-black hover:fill-blue-600 inline"
                    viewBox="0 0 512 512"
                    fill="#ffffff"
                    onClick={() => handleOrder(item)}
                  >
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"
                      fill="#000"
                    ></path>
                  </svg>

                  <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                    {card.filter((i) => i.id === item.id)[0]?.quantity || 0}
                  </span>
                </span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductCard;
