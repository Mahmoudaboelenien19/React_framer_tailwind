import clsx from "clsx";
import { Children } from "../../types";

type Props = {
  className: string;
  id: string;
} & Children;

const Container = ({ className, children, id }: Props) => {
  return (
    <div className={clsx("container p-6 min-h-screen    ", className)} id={id}>
      {children}
    </div>
  );
};

export default Container;
