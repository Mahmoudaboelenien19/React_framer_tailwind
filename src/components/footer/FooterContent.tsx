import React from "react";

type Props = {
  head: React.ReactNode;
  children: React.ReactNode;
};
const FooterContent = ({ head, children }: Props) => {
  return (
    <div className=" flex flex-col items-center  gap-3 max-w-sm grow text-mainWhite">
      <h1 className="p-4 h-20 w-full font-bold text-3xl flex items-center justify-center">
        {head}
      </h1>
      <div>{children}</div>
    </div>
  );
};

export default FooterContent;
