type Props = {
  service: string;
  head: string;
  Icon: React.ReactNode;
};
const Service = ({ service, head, Icon }: Props) => {
  return (
    <div className="flex items-center justify-center flex-col gap-4 max-w-[400px]">
      <div className="w-8 h-8">{Icon}</div>
      <h2
        className="
      text-lg md:text-xl lg:text-2xl 
      text-center font-bold text-mainDark dark:text-mainWhite"
      >
        {head}
      </h2>
      <p className="text-center  text-xs md:text-sm  font-bold text-mainDark dark:text-mainWhite opacity-60">
        {service}
      </p>
    </div>
  );
};

export default Service;
