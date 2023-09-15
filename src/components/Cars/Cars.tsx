import Barnds from "./Barnds";

import CarsSlide from "./CarsSlide";

const Cars = () => {
  return (
    <div
      className="max-w-screen pt-20 mx-auto flex flex-col justify-center "
      id="cars"
    >
      <Barnds />
      <CarsSlide />
    </div>
  );
};

export default Cars;
