import Button from "../widgets/Button";
import AboutIcons from "./AboutIcons";

const AboutContent = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <h1 className="text-4xl font-bold text-mainDark dark:text-mainWhite capitalize gap-4">
        car services
        <span className="text-mainRed"> simplified.</span>
      </h1>
      <p className="w-3/4 text-mainDark dark:text-mainWhite opacity-70">
        Rent, choose, and repair with ease. Our convenient locations, diverse
        car types, and reliable repair points ensure a seamless car experience.
      </p>
      <AboutIcons />

      <Button
        btn="See All Cars"
        fn={() => null}
        className="w-fit px-20 mx-auto"
      />
    </div>
  );
};

export default AboutContent;
