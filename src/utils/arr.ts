import Car1 from "@/assets/images/carSlider/car01.svg";
import Car2 from "@/assets/images/carSlider/car02.svg";
import Car3 from "@/assets/images/carSlider/car03.svg";
import GearIcon from "@/assets/icons/carSlider/gearshift.svg";
import WheelIcon from "@/assets/icons/carSlider/wheel.svg";
import SeatIcon from "@/assets/icons/carSlider/seat.svg";
import EngineIcon from "@/assets/icons/carSlider/engine.svg";
import GasIcon from "@/assets/icons/carSlider/gas.svg";

export const linksArr = [
  { link: "home", name: "Home" },
  { link: "cars", name: "Cars" },
  { link: "about", name: "About" },
  { link: "why", name: "Why us" },
  { link: "testmonials", name: "Testmonials" },
  { link: "download", name: "Download" },
];

export const cars = [
  {
    type: "Hatchback",
    name: "Ford Focus",
    price: 29,
    stars: 3.5,
    image: Car1,
    info: [
      {
        icon: GearIcon,
        text: "Manual",
      },
      {
        icon: SeatIcon,
        text: "5 Seats",
      },
      {
        icon: GasIcon,
        text: "Gas",
      },
      {
        icon: EngineIcon,
        text: "1600 HP",
      },
      {
        icon: WheelIcon,
        text: "front",
      },
    ],
  },
  {
    type: "Sedan",
    name: "Toyota Corolla",
    price: 25,
    stars: 35,
    image: Car2,
    info: [
      {
        icon: GearIcon,
        text: "Manual",
      },
      {
        icon: SeatIcon,
        text: "5 Seats",
      },
      {
        icon: GasIcon,
        text: "Gas",
      },
      {
        icon: EngineIcon,
        text: "1600 HP",
      },
      {
        icon: WheelIcon,
        text: "front",
      },
    ],
  },
  {
    type: "SUV",
    name: "Honda ",
    price: 35,
    stars: 4.7,
    image: Car3,
    info: [
      {
        icon: GearIcon,
        text: "Automatic",
      },
      {
        icon: SeatIcon,
        text: "5 Seats",
      },
      {
        icon: GasIcon,
        text: "Gas",
      },
      {
        icon: EngineIcon,
        text: "1600 HP",
      },
      {
        icon: WheelIcon,
        text: "front",
      },
    ],
  },
  {
    type: "Convertible",
    name: "Mazda ",
    price: 32,
    stars: 4.9,
    image: Car1,
    info: [
      {
        icon: GearIcon,
        text: "Automatic",
      },
      {
        icon: SeatIcon,
        text: "5 Seats",
      },
      {
        icon: GasIcon,
        text: "Gas",
      },
      {
        icon: EngineIcon,
        text: "1600 HP",
      },
      {
        icon: WheelIcon,
        text: "front",
      },
    ],
  },
];
