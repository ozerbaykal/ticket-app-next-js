type Props = {
  status: string;
};
const StatusBlock = ({ status }: Props) => {
  const getColor = () => {
    switch (status.toLowerCase()) {
      case "beklemede":
        return "bg-orange-500";
      case "devam ediyor":
        return "bg-blue-600";
      case "çözüldü":
        return "bg-green-600";

      default:
        return "bg-gray-500";
    }
  };
  return (
    <span
      style={{ background: getColor() }}
      className={`inline-block rounded-full  px-2 py-1 font-semibold text-xs ${getColor()}`}
    >
      {status}
    </span>
  );
};

export default StatusBlock;
