import Button from "../widgets/Button";

const HeroText = () => {
  return (
    <div className="w-3/8 max-w-[500px] flex flex-col  gap-4  p-4 mt-8 md:0">
      <h1 className="text-4xl lg:text-5xl font-bold  dark:text-mainWhite ">
        Explore the Finest
        <p>
          <span className="text-mainRed">Global</span> Offers
        </p>
      </h1>
      <p className="text-mainDark dark:text-mainWhite opacity-75 capitalize text-sm">
        find your ideal ride for any adventure with our diverse range of
        affordable and dependable car rentals
      </p>
      <Button className=" w-full md:w-fit mt-3 " btn="Book Now" fn={() => {}} />
    </div>
  );
};

export default HeroText;
