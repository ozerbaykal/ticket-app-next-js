import { JSX } from "react";

type Props = {
  title: string;
  value: number | string;
  icon: JSX.Element;
};
const DashboardValue = ({ value, title, icon }: Props) => {
  return (
    <div className="bg-zinc-700 p-5 lg:p-10 text-zinc-300 font-semibold flex justify-between items-center xl:flex-1">
      <div>
        <h1 className="text-4xl font-bold">{value}</h1>
        <p>{title}</p>
      </div>

      <span className="text-5xl  mt-12">{icon} </span>
    </div>
  );
};

export default DashboardValue;
