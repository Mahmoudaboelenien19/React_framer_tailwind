import clsx from "clsx";
import { Link } from "react-scroll";

type Props = {
  link: string;
  name: string;
  className?: string;
  onClick?: () => void;
} & React.HTMLAttributes<HTMLElement>; //
const MainLink = ({ link, name, className, ...props }: Props) => {
  return (
    <Link
      smooth
      spy
      className={clsx("hover:text-mainRed hover:opacity-60 ", className)}
      activeClass="!text-mainRed font-bold  hover:opacity-100"
      to={link}
      {...props}
    >
      {name}
    </Link>
  );
};

export default MainLink;
