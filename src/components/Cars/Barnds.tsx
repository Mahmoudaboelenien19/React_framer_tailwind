import Audi from "@/assets/icons/brands/audi.svg";
import Bmw from "@/assets/icons/brands/bmw.svg";
import Mazada from "@/assets/icons/brands/mazda.svg";
import Ford from "@/assets/icons/brands/ford.svg";
import mercedes from "@/assets/icons/brands/mercedes.svg";
import skoda from "@/assets/icons/brands/skoda.svg";
import Vw from "@/assets/icons/brands/vw.svg";
import { ReactSVG } from "react-svg";
const BrandsArr = [Audi, Bmw, Mazada, Ford, mercedes, skoda, Vw];
const Barnds = () => {
  return (
    <div className="  flex flex-wrap  justify-center mx-auto  w-full  md:w-5/6 gap-3 md:gap-14   ">
      {BrandsArr.map((brand: string, i) => {
        return (
          <ReactSVG src={brand} className="scale-100 md:scale-125 " key={i} />
        );
      })}
    </div>
  );
};

export default Barnds;
