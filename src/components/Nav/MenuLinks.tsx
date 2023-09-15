import { linksArr } from "../../utils/arr";
import MainLink from "./MainLink";
import { AiFillCloseCircle } from "react-icons/ai";

type Props = {
  handleShowMenu: () => void;
};
const MenuLinks = ({ handleShowMenu }: Props) => {
  return (
    <div className="gap-3 flex justify-center items-center flex-col md:hidden fixed top-0 left-0 w-screen h-screen bg-mainWhite dark:bg-mainDark z-10">
      {linksArr.map(({ link, name }) => (
        <MainLink
          onClick={handleShowMenu}
          key={link}
          link={link}
          name={name}
          className=" text-3xl !text-mainDark !dark:text-mainWhite  "
        />
      ))}
      <AiFillCloseCircle
        className="absolute top-5 right-5 text-mainRed "
        onClick={handleShowMenu}
      />
    </div>
  );
};

export default MenuLinks;
