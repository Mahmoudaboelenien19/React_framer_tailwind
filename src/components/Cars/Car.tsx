import { LazyLoadImage } from "react-lazy-load-image-component";
import { CarType } from "../../types";
import ReactStars from "react-stars";
const Car = ({ type, name, price, stars, image, info }: CarType) => {
  return (
    <div className=" flex flex-col gap-2  px-8 ">
      <LazyLoadImage
        src={image}
        alt={type}
        wrapperClassName="h-1/2 object-contain w-5/6 scale-125 "
        effect="blur"
      />
      <div className="mt-3 ">
        <h1 className="text-base opacity-70 text-mainDark dark:text-mainWhite flex justify-between">
          <span>{type}</span>
          <span>
            <ReactStars count={5} size={25} color2={"#B21E01"} value={stars} />
          </span>
        </h1>
        <h1 className="font-black  text-xl text-mainDark dark:text-mainWhite">
          {name}
        </h1>
        <p className="text-mainRed text-base font-medium">${price} /per day</p>
        <div className="flex gap-4 justify-center">
          {info.map(({ icon, text }) => {
            return (
              <div
                key={icon + text}
                className="flex flex-col h-24 justify-center items-center gap-2 mt-4"
              >
                <LazyLoadImage
                  effect="blur"
                  src={icon}
                  alt={text}
                  height={60}
                  wrapperClassName="scale-75"
                />
                <span className="font-medium  text-mainDark dark:text-mainWhite opacity-75">
                  {text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Car;
