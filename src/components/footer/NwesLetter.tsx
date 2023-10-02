import FooterContent from "./FooterContent";
import Button from "../widgets/Button";

const NwesLetter = () => {
  return (
    <FooterContent head="Newsletter">
      <div className="grow max-w-md flex justify-center  flex-col gap-4    ">
        <p className=" opacity-80 text-center">
          Stay in the loop with exclusive deals and updates. Sign up for our
          newsletter today!
        </p>
        <form className="h-12 flex">
          <input
            type="text"
            className="rounded-l border-0  h-full w-4/5 pl-2 text-gray-800 outline-none"
            placeholder="Your Email"
          />
          <Button
            className="h-full !p-0 text-xs !w-1/5 !rounded-0 "
            btn="Subscribe"
            fn={() => null}
          />
        </form>
      </div>
    </FooterContent>
  );
};

export default NwesLetter;
