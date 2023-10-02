import FooterContent from "./FooterContent";

const WorkingHours = () => {
  const ar = [
    {
      detail: "Mon-Fri",
      val: "8:00 AM - 5:00 PM",
    },
    {
      detail: "Mon-Fri",
      val: "8:00 AM - 9:00 PM",
    },
    {
      detail: "Sat",
      val: "Closed",
    },
  ];
  return (
    <FooterContent head={<>Working Hours</>}>
      {ar.map((item, index) => {
        return (
          <div key={index}>
            <span className="opacity-75">{item.detail} :</span>
            <span className="font-semibold ">{item.val}</span>
          </div>
        );
      })}
    </FooterContent>
  );
};

export default WorkingHours;
