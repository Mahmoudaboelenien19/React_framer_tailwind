import { CarType } from "@/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReactStars from "react-stars";
const Car = ({ type, name, price, stars, image, info }: CarType) => {
  return (
    <div className=" flex flex-col gap-2  px-8 ">
      <div className="flex  justify-center items-center ">
        <LazyLoadImage
          src={image}
          alt={type}
          wrapperClassName="h-1/2 object-contain w-5/6 scale-125  "
          effect="blur"
        />
      </div>
      <div className="mt-3 ">
        <h1 className="my-2 text-base opacity-70 text-mainDark dark:text-main White flex justify-between">
          <span>{type}</span>
          <span>
            <ReactStars count={5} size={25} color2={"#B21E01"} value={stars} />
          </span>
        </h1>
        <h1 className="font-black  text-xl text-mainDark dark:text-mainWhite">
          {name}
        </h1>
        <p className="text-mainRed text-base font-medium ">${price} /per day</p>
        <div className="flex   gap-2 justify-center items-start w-full ">
          {info.map(({ icon, text }) => {
            return (
              <div
                key={icon + text}
                className="flex flex-col grow  h-24 justify-start items-center mt-4  p-0  "
              >
                <div className=" w-14 h-14 flex justify-center items-center   bg-mainRed  rounded-full text-opacity-60">
                  <LazyLoadImage
                    effect="blur"
                    src={icon}
                    alt={text}
                    wrapperClassName="w-1/2 "
                    className="w-full object-contain"
                  />
                </div>
                <div className=" text-sm   font-medium align-center w-full text-mainDark dark:text-mainWhite opacity-75 mx-auto  text-center">
                  {text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Car;
