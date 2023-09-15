import clsx from "clsx";

type Props = {
  btn: string;
  className: string;
  fn: () => void;
};
const Button = ({ btn, className, fn }: Props) => {
  return (
    <button
      className={clsx(
        "text-mainWhite  rounded bg-mainRed  p-4 px-8 text-bold  hover:opacity-90",
        className
      )}
      onClick={fn}
    >
      {btn}
    </button>
  );
};

export default Button;
