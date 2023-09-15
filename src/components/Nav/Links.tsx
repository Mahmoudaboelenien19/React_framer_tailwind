import { linksArr } from "../../utils/arr";
import MainLink from "./MainLink";

const Links = () => {
  return (
    <div className="hidden justify-center gap-3  md:flex">
      {linksArr.map(({ link, name }) => (
        <MainLink key={link} link={link} name={name} />
      ))}
    </div>
  );
};

export default Links;
